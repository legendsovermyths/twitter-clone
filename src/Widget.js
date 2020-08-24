import React from "react";
import "./Widget.css";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";
function Widget() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchRoundedIcon className='widgets__searchIcon' />
        <input placeholder='Search Twitter' type='text' />
      </div>
      <div className='widgets__widgetsContainer'>
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1296884788809400320"} />
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='GoogleIndia'
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
}

export default Widget;
