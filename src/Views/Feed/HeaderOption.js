import React from "react";
import "./HeaderOption.scss";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const HeaderOption = ({ avater, Icon, title, onClick }) => {
  const user = useSelector(selectUser);

  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {avater && (
        <Avatar src={user?.photoURL} className="headerOption_icon">
          {" "}
          {user?.email[0]}{" "}
        </Avatar>
      )}
      {!avater ? (
        <h3 className="headerOption_title">{title}</h3>
      ) : (
        <div className="headerOption_userProfile">
          <div className="userProfile_dropdown">
            <h3 className="headerOption_title">{title}</h3>
            <ArrowDropDownIcon />
          </div>
          <div className="userProfile-togle">
            <div className="user_pic">
              <Avatar src={user?.photoURL} className="headerOption_icon_pic">
                {" "}
                {user?.email[0]}{" "}
              </Avatar>
              <span>{user?.displayName}</span>
            </div>
            <div className="view_profile">
              <Link to="profile">
                <span>View Profile</span>
              </Link>
            </div>
            <hr />
            <div className="acc-settings">
              <strong>Account</strong>
              <span>Settings & Privacy</span>
              <span>Help</span>
              <span>Language</span>
            </div>
            <hr />
            <div className="acc-settings">
              <strong>Manage</strong>
              <span>Posts & Activity</span>
              <span>My posted Jobs</span>
            </div>
            <hr />
            <span onClick={onClick}>Sign Out</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderOption;
