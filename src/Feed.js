import React, { useEffect, useState } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import { db } from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);
  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Home</h2>
      </div>
      <TweetBox />
      {posts.map(({ id, post }) => (
        <Post
          userName={post.userName}
          avatar={post.avatar}
          verified={post.verified}
          postId={id}
          key={id}
          displayName={post.displayName}
          username={post.username}
          image={post.image}
          text={post.text}
        />
      ))}
    </div>
  );
}

export default Feed;
