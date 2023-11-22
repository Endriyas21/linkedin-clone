import React from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form className="">
            <input type="text" />
            <button type="submit">Send</button>
          </form>
          <div className="feed_inputOptions">
            <InputOption />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
