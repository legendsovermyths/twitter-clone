import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";

import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption.js";
function App() {
  return (
    <div className='app'>
      <h1>Let's make a twitter clone!</h1>
      <TwitterIcon />
      <SidebarOption />
      <SidebarOption />
      <SidebarOption />
      <SidebarOption />
      <SidebarOption />
      <SidebarOption />
    </div>
  );
}

export default App;
