import React, { useRef, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.scss";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { useDispatch } from "react-redux";
import { logout } from "../../features/user/userSlice";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import { auth } from "../../firebase";
const Header = () => {
  const user = useSelector(selectUser);

  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const profileRef = useRef();
  const history = useHistory();

  const logoutOfApp = () => {
    dispatch(logout());
    setShow(false);
    auth.signOut();
    history.push("/login");
  };

  const handleProfile = (e) => {
    e.preventDefault();
    setShow(true);
    show && profileRef.current.classList.toggle("remove");
  };

  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatBubbleIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <div className="avata">
          <div onClick={handleProfile}>
            {" "}
            <Avatar src={user?.photoURL} className="headerOption_icon">
              {" "}
              {user?.email[0]}{" "}
            </Avatar>
            <div className="userProfile_dropdown">
              <h3 className="headerOption_title">Me</h3>
              <ArrowDropDownIcon />
            </div>
          </div>
          {show && (
            <div ref={profileRef} className="headerOption_userProfile ">
              <div className="userProfile-togle">
                <div className="user_pic">
                  <Avatar
                    src={user?.photoURL}
                    className="headerOption_icon_pic"
                  >
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
                <div className="signout">
                  <span onClick={logoutOfApp}>Sign Out</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
