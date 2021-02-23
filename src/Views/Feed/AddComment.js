import React from "react";
import "./Comment.scss";
import ImageIcon from "@material-ui/icons/Image";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

const AddComment = ({ values, setValues, sendPost, replyOwner = "" }) => {
  return (
    <div className="comment-add">
      <form onSubmit={sendPost}>
        <input
          value={values.text}
          name="text"
          onChange={(e) => {
            setValues((prevState) => ({ ...prevState, text: e.target.value }));
          }}
          type="text"
          placeholder="Add comment..."
        />
        <button type="submit">Send</button>
      </form>
      <SentimentVeryDissatisfiedIcon />
      <div className="comment-add-image">
        <form onSubmit={sendPost}>
          <input
            value={values.image}
            name="image"
            onChange={(e) => {
              setValues((prevState) => ({
                ...prevState,
                image: e.target.value,
              }));
            }}
            type="file"
          />
          <button type="submit">Send</button>
        </form>
        <ImageIcon />
      </div>
    </div>
  );
};

export default AddComment;
