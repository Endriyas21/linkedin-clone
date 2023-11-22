import React from "react";
import "./Sidebar.css";
import { Topic } from "@mui/icons-material";
import Avatar from "@mui/icons-material/AccountCircle";
const Sidebar = () => {
  const recentItem = (topic) => {
    return (
      <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1631631480669-535cc43f2327?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <Avatar className="sidebar_avatar" />
        <h2>Username</h2>
        <h4>email</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,543</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">2,448</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("productmangment")}
        {recentItem("design")}
      </div>
    </div>
  );
};

export default Sidebar;
