import React, { useEffect, useState, useRef } from "react";
import "./Comment.scss";
import { Avatar } from "@material-ui/core";
import Reply from "./Reply";
import AddComment from "./AddComment";
import { db } from "../../firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import CommentContent from "./CommentContent";
import ReplyLikes from "./ReplyLikes";
import ReplyRecursion from "./ReplyRecursion";

const Comment = ({ postId }) => {
  const user = useSelector(selectUser);
  const [postcomment, setPostcomment] = useState([]);
  const [comment, setComment] = useState({
    text: "",
    image: "",
  });
  const [reply, setReply] = useState({
    text: "",
    image: "",
  });
  const comRepRef = useRef();
  const [postreplies, setPostreplies] = useState({});

  useEffect(() => {
    db.collection("posts")
      .doc(postId)
      .collection("comments")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPostcomment(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    return () => {};
  }, []);

  const sendComment = (e) => {
    e.preventDefault();
    db.collection("posts")
      .doc(`${postId}`)
      .collection("comments")
      .add({
        name: user.displayName,
        description: user.email,
        message: comment.text,
        image: comment.image,
        photoURL: user.photoURL || "",
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    setComment({
      text: "",
      image: "",
    });
  };
  const sendReply = (e, commentId) => {
    e.preventDefault();
    db.collection("posts")
      .doc(`${postId}`)
      .collection("comments")
      .doc(`${commentId}`)
      .collection("replies")
      .add({
        name: user.displayName,
        description: user.email,
        message: reply.text,
        image: reply.image,
        photoURL: user.photoURL || "",
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

    setReply({
      text: "",
      image: "",
    });
  };
  const handleComment = (e, replyId) => {
    e.preventDefault();
    const replyRef = document.querySelector(`.ab${replyId}`);
    if (replyRef.style.display === "block") {
      replyRef.style.display = "none";
    } else {
      replyRef.style.display = "block";
    }
  };
  return (
    <div className="comment">
      <div className="comment-top">
        <Avatar src={user.photoURL}>{user.displayName[0]}</Avatar>
        <AddComment
          values={comment}
          setValues={setComment}
          sendPost={sendComment}
        />
      </div>
      <div className="comment_bottom">
        {postcomment.length > 0 ? <p>Most recent</p> : ""}
        {postcomment.map(({ id, data }) => {
          return (
            <div key={id} className="comment_bottom_wrap">
              <Avatar src={data.photoURL}>{data.name[0]}</Avatar>
              <div className="comment_bottom_content">
                <CommentContent
                  name={data.name}
                  description={data.description}
                  timestamp={data.timestamp}
                  message={data.message}
                />
                <ReplyLikes
                  replyId={id}
                  reply={postreplies[`ab${id}`] ? postreplies[`ab${id}`] : []}
                  handleReply={handleComment}
                />
                <ReplyRecursion
                  Reply={Reply}
                  sendReply={sendReply}
                  id={id}
                  reply={reply}
                  setReply={setReply}
                  postId={postId}
                  postreplies={postreplies}
                  setPostreplies={setPostreplies}
                  handleComment={handleComment}
                  ref={comRepRef}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comment;
