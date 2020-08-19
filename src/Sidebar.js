import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ListIcon from "@material-ui/icons/List";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Button from "@material-ui/core/Button";

function Sidebar() {
  return (
    <div className='sidebar'>
      <TwitterIcon />
      <SidebarOption active text='Home' Icon={HomeIcon} />
      <SidebarOption text='Explore' Icon={SearchIcon} />
      <SidebarOption text='Notification' Icon={NotificationsNoneIcon} />
      <SidebarOption text='Messages' Icon={MailOutlineIcon} />
      <SidebarOption text='Bookmarks' Icon={BookmarkBorderIcon} />
      <SidebarOption text='List' Icon={ListIcon} />
      <SidebarOption text='Profile' Icon={PermIdentityIcon} />
      <SidebarOption text='More' Icon={MoreHorizIcon} />
      <Button variant='outlined' className='sidebar__tweet' fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
