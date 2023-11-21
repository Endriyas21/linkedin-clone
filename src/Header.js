import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcone from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BussinesCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationIcon from "@material-ui/icons/Notifications";
// Header component
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        {/* Logo image */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgRiokcsXWOZDgS1JwAMjncq9XZDNZP1piiERPArxVhg&s"
          alt=""
        />
        {/* Search bar */}
        <div className="header_search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcone} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BussinesCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationIcon} title="Notifications" />
        <HeaderOption
          avatar="https://pixabay.com/photos/korea-tree-gyeongbokgung-seoul-7366036/"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
//
//In this code, we have a `Header` component that renders a header with a logo, search bar, and two sections for additional content. The `header_left` section contains the logo and search bar, while the `header_right` section is empty and can be used for additional content.
//
//The `Header` component is exported as the default export, making it available for import and use in other components..</s>
