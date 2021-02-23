import React, { forwardRef, useEffect } from "react";
import "./LikesCategories.scss";
import LikesIcon from "./LikesIcon";
import FavoriteIcon from "@material-ui/icons/Favorite";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import clap from "../../Asset/clap-hands.png";
import suppo from "../../Asset/suppo.png";
import heart from "../../Asset/heart.png";
import light from "../../Asset/light-bulb.png";
import think from "../../Asset/think.png";

const LikesCategories = forwardRef(
  ({ show, setShow, LikesCategoriesArr }, ref) => {
    const handleClick = (e) => {
      e.preventDefault();
      setShow(true);
      ref.current.classList.remove("hover_likes");
    };
    const handleEnter = (e) => {
      e.preventDefault();
      setShow(true);
    };
    const handleLeave = (e) => {
      e.preventDefault();
      setShow(true);
    };
    return (
      <div
        onMouseOut={handleLeave}
        onMouseOver={handleEnter}
        onClick={handleClick}
        ref={ref}
        className="post_likes_categories"
      >
        <LikesIcon Icon={ThumbUpIcon} title="Like" />
        <LikesIcon Src={heart} title="Love" />
        <LikesIcon Src={clap} title="Celebrate" />
        <LikesIcon Src={suppo} title="Support" />
        <LikesIcon Src={light} title="Insightful" />
        <LikesIcon Src={think} title="Curious" />
      </div>
    );
  }
);
export default LikesCategories;
