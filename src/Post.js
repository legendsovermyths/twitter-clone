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
        <Avatar src='https://img.wallpapersafari.com/desktop/1680/1050/79/9/wRrpnW.jpg'></Avatar>
      </div>
      <div className='post__body'>
        <div className='post__header'>
          <div className='post__headerText'>
            <h3>
              Levi
              <span className='post__headerSpecial'>
                <VerifiedUserIcon className='post__badge' />
                {" @LeviWithoutTitans"}
              </span>
            </h3>
          </div>
          <div className='post__headerDescription'>
            <p>I will defeat all the titans!!!</p>
          </div>
        </div>
        <img
          className='post__img'
          src='https://media0.giphy.com/media/S0zHxjax3DbJm/giphy.gif?cid=ecf05e47wusrm81unnx9ucr2pa4c3scn9zfnuod68awser2y&rid=giphy.gif'
          alt=''
        />
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
