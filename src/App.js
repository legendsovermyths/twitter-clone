import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";
import { db } from "./firebase";

function App() {
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
    <div className='app'>
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  );
}

export default App;
