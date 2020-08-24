import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import "./TweetBox.css";
import { db } from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "L",
      userName: "@LtheLegend",
      verified: true,
      image: tweetImage,
      text: tweetMessage,
      avatar: "https://wallpaperaccess.com/full/814594.jpg",
    });
    setTweetImage("");
    setTweetMessage("");
  };
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://wallpaperaccess.com/full/814594.jpg' />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            type='text'
            placeholder="What's happening?"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className='tweetBox__imageInput'
          type='text'
          placeholder='Optional:Enter Image URL'
        />
        <Button
          onClick={sendTweet}
          type='submit'
          className='tweetBox__tweetButton'>
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
