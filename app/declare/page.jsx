"use client"
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const Declare = () => {
  const router = useRouter();
  const {data : session } = useSession();

  const [submitting, setSubmitting] = useState(false)
  const [post, setPost] = useState({
      declaration: '',
      tag : ''
});

const declare = async (e) => {
    e.preventDefault();
    setSubmitting(true);
try {
    const response = await fetch('/api/declarations/new', {
      method : 'POST',
      body: JSON.stringify({
        declaration: post.declaration,
        userId : session?.user.id,
        tag : post.tag
      })
    })
    if (response.ok){
      router.push('/')
    }
} catch (error) {
    console.log(error)
}
  finally{
    setSubmitting(false)
  }

}
  return (
    <Form
    type="Declare"
    post={post}
    setPost={setPost}
    submitting={submitting}
    handleSubmit={declare}
    />
  )
}

export default Declare