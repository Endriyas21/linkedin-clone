import React from "react";
import "./HeaderOption.css";

function HeaderOption({ Avatar, title, Icon }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {Avatar && <Avatar className="headerOption_icon" src={Avatar} />}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
