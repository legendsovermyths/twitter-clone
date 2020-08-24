import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";

function Post({ displayName, userName, verified, text, image, avatar }) {
  return (
    <div className='post'>
      <div className='post__avatar'>
        <Avatar src={avatar}></Avatar>
      </div>
      <div className='post__body'>
        <div className='post__header'>
          <div className='post__headerText'>
            <h3>
              {displayName}
              <span className='post__headerSpecial'>
                <VerifiedUserIcon className='post__badge' />
                {" @LeviWithoutTitans"}
              </span>
            </h3>
          </div>
          <div className='post__headerDescription'>
            <p>{text}</p>
          </div>
        </div>
        <img className='post__img' src={image} alt='' />
        <div className='post__footer'>
          <ChatBubbleOutlineOutlinedIcon fontSize='small'></ChatBubbleOutlineOutlinedIcon>
          <RepeatOutlinedIcon fontSize='small'></RepeatOutlinedIcon>
          <FavoriteBorderOutlinedIcon fontSize='small'></FavoriteBorderOutlinedIcon>
          <PublishRoundedIcon fontSize='small'></PublishRoundedIcon>
        </div>
      </div>
    </div>
  );
}

export default Post;
