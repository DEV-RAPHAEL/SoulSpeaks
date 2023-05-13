"use client"
import axios from 'axios'
import { useState } from "react";
import Form from "@components/Form";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Declare = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false)
  const [post, setPost] = useState({ declaration: '', tag: '' });

  const declare = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await axios.post(
      '/api/declarations/new',
      JSON.stringify({
        declaration: post.declaration,
        userId: session?.user.id,
        tag: post.tag
      })
    ).then(res => {
      router.push('/')
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      setSubmitting(false)
    })
  }

  return (
    <Form
      type="Declare"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={declare} />
  )
}

export default Declare