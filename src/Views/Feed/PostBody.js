import { Avatar } from "@material-ui/core";
import React from "react";
import "./PostBody.scss";

const PostBody = ({ name, description, message, photoURL }) => {
  return (
    <React.Fragment>
      <div className="post_header">
        <Avatar src={photoURL}>{name[0]}</Avatar>
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">{message}</div>
    </React.Fragment>
  );
};

export default PostBody;
