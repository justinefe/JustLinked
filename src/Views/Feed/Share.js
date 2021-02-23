import { Avatar } from "@material-ui/core";
import React from "react";
import Modal from "./Modal";
import PublicIcon from "@material-ui/icons/Public";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./Share.scss";
import PostBody from "./PostBody";

const Share = React.forwardRef(
  ({ title, name, description, message, photoURL }, ref) => {
    return (
      <Modal title={title} ref={ref}>
        <div className="share">
          <div className="share_top">
            <Avatar />
            <div className="share_top_description">
              <span>Justin Igugu</span>
              <div className="anyonewrap">
                <PublicIcon />
                Anyone
                <ArrowDropDownIcon />
              </div>
            </div>
          </div>
          <div className="share_middle">
            <form>
              <textarea
                name=""
                id=""
                cols="30"
                rows="3"
                placeholder="Start writing or use @ to mention people, companies or schools"
              ></textarea>
            </form>
            <div className="post_share">
              <PostBody
                name={name}
                description={description}
                message={message}
                photoURL={photoURL}
              />
            </div>
          </div>
        </div>
        <div className="share_bottom">
          <button>Post</button>{" "}
        </div>
      </Modal>
    );
  }
);

export default Share;
