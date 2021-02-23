import React, { forwardRef, useRef, useState } from "react";
import { Avatar } from "@material-ui/core";
import "./Post.scss";
import InputOption from "./InputOption";
import ThumbUpAltOutLinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import ShareOutLinedIcon from "@material-ui/icons/ShareOutlined";
import ChatOutLinedIcon from "@material-ui/icons/ChatOutlined";
import SendOutLinedIcon from "@material-ui/icons/SendOutlined";
import Comment from "./Comment";
import LikesCategories from "./LikesCategories";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import suppo from "../../Asset/suppo.png";
import heart from "../../Asset/heart.png";
import light from "../../Asset/light-bulb.png";
import LikesPopUp from "./LikesPopUp";
import "./LikesPopUp.scss";
import Share from "./Share";
import PostBody from "./PostBody";
import Send from "./Send";

const Post = forwardRef(
  ({ postId, name, description, message, photoURL }, ref) => {
    const commentRef = useRef();
    const likesRef = useRef();
    const modalRef = useRef();
    const shareRef = useRef();
    const sendRef = useRef();
    const [show, setShow] = useState(false);
    const handleComment = (e) => {
      e.preventDefault();
      commentRef.current.classList.toggle("add");
    };
    const handleSend = (e) => {
      e.preventDefault();
      e.stopPropagation();
      sendRef.current.style.display = "flex";
    };
    const handleHover = (e) => {
      e.preventDefault();
      likesRef.current.classList.add("hover_likes");
      setTimeout(() => {
        if (show === false) {
          likesRef.current.classList.remove("hover_likes");
        }
      }, 3000);
    };

    const handleShare = (e) => {
      e.preventDefault();
      e.stopPropagation();
      shareRef.current.style.display = "block";
    };

    const handleClickModal = (e) => {
      e.preventDefault();
      e.stopPropagation();
      modalRef.current.style.display = "block";
    };
    return (
      <div ref={ref} className="post">
        <PostBody
          name={name}
          description={description}
          message={message}
          photoURL={photoURL}
        />
        <div className="post_likes_comments_total">
          <div
            className="post_likes_comments_total_likes"
            onClick={handleClickModal}
          >
            <div className="post_likes">
              <LikesPopUp title="Reactions" ref={modalRef} />
              <ThumbUpIcon />
              <img className="post_img" src={heart} alt="" />
              <img className="post_img" src={suppo} alt="" />
              <img className="post_img" src={light} alt="" />
            </div>
            <div className="post_likes_total">14258</div>
          </div>
          <div className="post_likes_comments_separator"></div>
          <div className="post_comments_total">
            <span>12456 </span>comments<span></span>
          </div>
        </div>

        <div className="post_buttons">
          <LikesCategories setShow={setShow} show={show} ref={likesRef} />
          <Share
            name={name}
            description={description}
            message={message}
            photoURL={photoURL}
            title="Share"
            ref={shareRef}
          />
          <Send
            name={name}
            description={description}
            message={message}
            photoURL={photoURL}
            ref={sendRef}
          />

          <InputOption
            handleHover={handleHover}
            Icon={ThumbUpAltOutLinedIcon}
            title="Like"
            color="gray"
            name="like"
          />
          <InputOption
            handleComment={handleComment}
            Icon={ChatOutLinedIcon}
            title="Comment"
            color="gray"
            name="comment"
          />
          <InputOption
            Icon={ShareOutLinedIcon}
            handleShare={handleShare}
            name="share"
            title="Share"
            color="gray"
          />
          <InputOption
            Icon={SendOutLinedIcon}
            handleSend={handleSend}
            name="send"
            title="Send"
            color="gray"
          />
        </div>
        <div ref={commentRef} className="comment_display">
          <Comment
            name={name}
            postId={postId}
            description={description}
            message={message}
            photoURL={photoURL}
          />
        </div>
      </div>
    );
  }
);

export default Post;
