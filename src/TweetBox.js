import React from "react";
import { Avatar, Button } from "@material-ui/core";
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://wallpaperaccess.com/full/814594.jpg' />
          <input type='text' placeholder="What's happening?" />
        </div>
        <input
          className='tweetBox__imageInput'
          type='text'
          placeholder='Optional:Enter Image URL'
        />
        <Button className='tweetBox__tweetButton'>Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
