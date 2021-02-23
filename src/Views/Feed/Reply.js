import React, { useEffect, useRef, useState } from "react";
import { Avatar } from "@material-ui/core";
import { db } from "../../firebase";
import CommentContent from "./CommentContent";
import "./Reply.scss";
import ReplyLikes from "./ReplyLikes";
import firebase from "firebase";
import AddComment from "./AddComment";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";

const Reply = ({ postId, commentId, postreplies, setPostreplies }) => {
  const user = useSelector(selectUser);
  const [rereply, setRereply] = useState({ text: "Efe ", image: "" });
  const comRepRefSub = useRef();
  useEffect(async () => {
    await db
      .collection("posts")
      .doc(`${postId}`)
      .collection("comments")
      .doc(`${commentId}`)
      .collection("replies")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPostreplies((prevState) => ({
          ...prevState,
          [`ab${commentId}`]: snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          })),
        }));
      });
    return () => {};
  }, [commentId]);

  const handleReply = (e, replyId) => {
    e.preventDefault();
    const replyRef = document.querySelector(`.ab${replyId}`);
    if (replyRef.style.display === "block") {
      replyRef.style.display = "none";
    } else {
      replyRef.style.display = "block";
    }
  };

  const handleRereply = (e, replyId) => {
    e.preventDefault();
    db.collection("posts")
      .doc(`${postId}`)
      .collection("comments")
      .doc(`${commentId}`)
      .collection("replies")
      .doc(`${replyId}`)
      .collection("rereplies")
      .add({
        name: user.displayName,
        description: user.email,
        message: rereply.text,
        image: rereply.image,
        photoURL: user.photoURL || "",
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    setRereply({
      text: "",
      image: "",
    });
  };

  return (
    <React.Fragment>
      {postreplies[`ab${commentId}`]?.map(({ id, data }) => {
        return (
          <React.Fragment>
            <div key={id} className="subreply_wrap">
              <Avatar src={data.photoURL}>{data.name[0]}</Avatar>
              <div className="comment_bottom_content">
                <CommentContent
                  key={id}
                  name={data.name}
                  description={data.description}
                  timestamp={data.timestamp}
                  message={data.message}
                />
                <ReplyLikes
                  reply={postreplies[`ab${commentId}`]}
                  handleReply={handleReply}
                  replyId={id}
                />
              </div>
            </div>
            <div ref={comRepRefSub} className={`comment_bottom_bottom ab${id}`}>
              <div className="comment-top subreply_wrap">
                <Avatar src={user.photoURL}>{user.displayName[0]}</Avatar>
                <AddComment
                  sendPost={(e) => handleRereply(e, id)}
                  values={rereply}
                  setValues={setRereply}
                  replyOwner={data.name}
                />
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default Reply;
