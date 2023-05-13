"use client"
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";


const Card = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const [copied, setCopied] = useState("");

  const handleCopy = async () => {
    try {
      setCopied(post.declaration);
      await navigator.clipboard.writeText(post.declaration);
      setTimeout(() => setCopied(""), 3000);
    } catch {
      setCopied("Failed to copy!")
    }
  }

  return (
    <div className="card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-2 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={post.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain" />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-grey-900">{post.creator.username}</h3>
            <h3 className="font-inter text-sm text0grey-500">{post.creator.email}</h3>
          </div>
        </div>
        <div className="copy_btn" onClick={async () => await handleCopy()}>
          <Image
            src={copied === post.declaration
              ? '/assets/icons/tick.svg'
              : '/assets/icons/copy.svg'}
            width={12}
            height={14} />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm">{post.declaration}</p>
      <p className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post.tag)}>
        {post.tag}
      </p>
    </div>
  )
};

export default Card