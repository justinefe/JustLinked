import React from "react";
import PostBody from "./PostBody";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import "./Send.scss";

const Send = React.forwardRef(
  ({ name, description, message, photoURL }, ref) => {
    const handleClickClose = (e) => {
      e.preventDefault();
      e.stopPropagation();
      ref.current.style.display = "none";
    };
    const handleEnlarge = (e) => {
      e.preventDefault();
      e.stopPropagation();
      ref.current.classList.toggle("enlarge_height");
    };
    return (
      <div ref={ref} className="send">
        <div className="send_first">
          {" "}
          <span>New message</span>
          <div className="message-right">
            <div onClick={handleEnlarge} className="enlarge">
              <UnfoldMoreIcon />
            </div>
            <div className="mens">
              <span onClick={handleClickClose}>&times;</span>
            </div>
          </div>
        </div>
        <div className="send_second">
          <form>
            <input type="text" placeholder="Type a name or multiple names" />
          </form>
        </div>
        <div className="send_third">
          <div className="send_third_wrap">
            <div className="send_third_input">
              <form>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="3"
                  placeholder="Write a message..."
                ></textarea>{" "}
              </form>
            </div>
            <div className="send_third_post_body">
              <PostBody
                name={name}
                description={description}
                message={message}
                photoURL={photoURL}
              />
            </div>
          </div>
        </div>
        <div className="send_fourth">
          <div className="send_fourth_btn">
            <button>Send</button>
          </div>
        </div>
      </div>
    );
  }
);

export default Send;
