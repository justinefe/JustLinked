import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const CommentContent = ({ name, description, timestamp, message }) => {
  return (
    <div className="comment_bottom_top">
      <div className="comment_body_main">
        <div className="comment_body_top_left">
          <span>{name}</span>
          <p>{description}</p>
        </div>
        <div className="comment_body_top_right">
          {" "}
          <span>{timestamp?.toDate().toLocaleDateString()}</span>
          <MoreHorizIcon />
        </div>
      </div>
      <div className="comment_message">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default CommentContent;
