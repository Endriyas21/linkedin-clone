import React from "react";
import "./InputOption.css";
const InputOption = ({ color, title, icon }) => {
  return (
    <div>
      <icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
};

export default InputOption;
