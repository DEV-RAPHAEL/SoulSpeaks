"use client"
import { useState, useEffect } from "react";
import Card from "./card";


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
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/declarations");
      const data = await response.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative ww-full flex-center">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <CardList 
      data={posts}
      handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
