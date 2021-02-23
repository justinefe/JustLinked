import React from "react";
import "./InputOption.scss";

const InputOption = ({
  Icon,
  title,
  color,
  handleComment,
  handleHover,
  handleSend,
  handleShare,
  name,
}) => {
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        if (name === "comment") {
          handleComment(e);
        }
        if (name === "share") {
          handleShare(e);
        }
        if (name === "send") {
          handleSend(e);
        }
      }}
      onMouseOver={(e) => {
        e.preventDefault(e);
        if (name === "like") {
          handleHover(e);
        }
      }}
      className="inputOption"
    >
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
};

export default InputOption;
