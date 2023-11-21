import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
// Header component
function Header() {
  return (
    <div className="header">
      <h1>This is a header</h1>
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
      <div className="header_right"></div>
    </div>
  );
}

export default Header;
//
//In this code, we have a `Header` component that renders a header with a logo, search bar, and two sections for additional content. The `header_left` section contains the logo and search bar, while the `header_right` section is empty and can be used for additional content.
//
//The `Header` component is exported as the default export, making it available for import and use in other components..</s>
