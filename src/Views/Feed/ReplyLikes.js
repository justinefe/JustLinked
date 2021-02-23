import React from "react";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

const ReplyLikes = ({ handleReply, reply, replyId }) => {
  return (
    <div className="comment_bottom_middle">
      <div className="reaction">
        <span>Like</span>
        <span>.</span>
        <ThumbUpAltIcon />
        <span>1</span>
      </div>
      <div className="separator"></div>
      <div onClick={(e) => handleReply(e, replyId)} className="reply">
        <span>Reply</span>
        {reply.length > 0 ? (
          <>
            <span>.</span>
            <span>{reply.length}</span>
            <span>{reply.length < 2 ? "Reply" : "Replies"}</span>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ReplyLikes;
