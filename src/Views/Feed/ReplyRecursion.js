import React from "react";
import AddComment from "./AddComment";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import Reply from "./Reply";
import { selectUser } from "../../features/user/userSlice";

const ReplyRecursion = React.forwardRef(
  (
    {
      id,
      postId,
      postreplies,
      setPostreplies,
      reply,
      sendReply,
      setReply,
      handleComment,
    },
    ref
  ) => {
    const user = useSelector(selectUser);

    return (
      <div ref={ref} className={`comment_bottom_bottom ab${id}`}>
        <div className="comment">
          <div className="comment-top reduce">
            <Avatar src={user.photoURL}>{user.displayName[0]}</Avatar>
            <AddComment
              sendPost={(e) => sendReply(e, id)}
              values={reply}
              setValues={setReply}
            />
          </div>
          <Reply
            commentId={id}
            postId={postId}
            postreplies={postreplies}
            setPostreplies={setPostreplies}
            handleReply={handleComment}
          />
        </div>
      </div>
    );
  }
);

export default ReplyRecursion;
