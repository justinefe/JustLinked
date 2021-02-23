import React, { useState, useEffect } from "react";
import CreateIcon from "@material-ui/icons/Create";
import firebase from "firebase";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalenderViewDayIcon from "@material-ui/icons/CalendarViewDay";
import { db } from "../../firebase";

import "./Feed.scss";
import Post from "./Post";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import FlipMove from "react-flip-move";

const Feed = () => {
  const user = useSelector(selectUser);

  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [videoUrl, setvideoUrl] = useState("");
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      image: imageUrl,
      video: videoUrl,
      photoURL: user.photoURL || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalenderViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {/**Post
       */}
      <FlipMove>
        {posts?.map(
          ({ id, data: { name, description, message, photoURL } }) => (
            <Post
              key={id}
              postId={id}
              name={name}
              description={description}
              message={message}
              photoURL={photoURL}
            />
          )
        )}
      </FlipMove>
    </div>
  );
};

export default Feed;
