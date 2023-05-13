"use client"
import Card from "./card";
import axios from "axios";
import { useState, useEffect } from "react";


const CardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 card_layout">
      {data.map((post) => (
        <Card key={post._id}
          post={post}
          handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      await axios.get("/api/declarations")
        .then(res => {
          setPosts(res.data);
        }).catch(err => {
          console.log(err.response?.data)
        })
    }

    (async () => await fetchPosts())();
  }, []);

  // search by post declaration and tag
  const renderedPosts = posts.filter(post => post.declaration?.toLowerCase()?.includes(searchText.toLowerCase()))

  return (
    <section className="feed">
      <form className="relative ww-full flex-center">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          required
          className="search_input peer" />
      </form>
      <CardList
        data={renderedPosts}
        handleTagClick={() => { }} />
    </section>
  );
};

export default Feed;
