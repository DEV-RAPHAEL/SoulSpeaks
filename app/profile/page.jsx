"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Profile from '../../components/Profile';
import { useSession } from "next-auth/react";

const MyProfile = () => {
  const [posts, setPosts] = useState([])
  const { data: session } = useSession()

  useEffect(() => {
    const fetchPosts = async () => {
      await axios.get(`/api/users/${session?.user.id}/posts`)
        .then(res => {
          setPosts(res.data);
        }).catch(err => {
          console.log(err.code)
        })
    }

    if (session?.user.id) (async () => await fetchPosts())();
  }, []);

  const handleEdit = async (id) => {
    await axios.put(``, JSON.stringify({}))
      .then(res => {
        // resolved
        console.log("Edited")
      }).catch(err => {
        // rejected
        console.log(err.code)
      })
  }

  const handleDelete = async (id) => {
    await axios.delete(``, JSON.stringify({}))
      .then(res => {
        // resolved
        console.log("Deleted")
      }).catch(err => {
        // rejected
        console.log(err.code)
      })
  }

  return (
    <Profile
      name='My'
      desc="Welcome to my personal Profile"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default MyProfile