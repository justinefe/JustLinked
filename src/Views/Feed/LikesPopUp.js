import React, { forwardRef, useRef, useEffect } from "react";
import "./LikesPopUp.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import suppo from "../../Asset/suppo.png";
import heart from "../../Asset/heart.png";
import light from "../../Asset/light-bulb.png";
import { Avatar } from "@material-ui/core";
import Modal from "./Modal";

const LikesPopUp = React.forwardRef(({ title }, ref) => {
  return (
    <Modal title={title} ref={ref}>
      <div className="LikesPopUp_middle">
        <NavLink activeClassName="navlink_active_class" to="/all">
          {" "}
          <div className="LikesPopUp_middle_links first">
            <span className="first">All</span>
            <span>21545</span>
          </div>
        </NavLink>
        <NavLink activeClassName="navlink_active_class" to="/like">
          {" "}
          <div className="LikesPopUp_middle_links ">
            <img src={heart} alt="" />
            <span>21545</span>
          </div>
        </NavLink>
        <NavLink activeClassName="navlink_active_class" to="/love">
          {" "}
          <div className="LikesPopUp_middle_links">
            <img src={heart} alt="" />
            <span>21545</span>
          </div>
        </NavLink>
        <NavLink activeClassName="navlink_active_class" to="/celebrate">
          {" "}
          <div className="LikesPopUp_middle_links">
            <img src={heart} alt="" />
            <span>21545</span>
          </div>
        </NavLink>{" "}
        <NavLink activeClassName="navlink_active_class" to="/support">
          {" "}
          <div className="LikesPopUp_middle_links">
            <img src={heart} alt="" />
            <span>21545</span>
          </div>
        </NavLink>
        <NavLink activeClassName="navlink_active_class" to="/insighful">
          {" "}
          <div className="LikesPopUp_middle_links">
            <img src={light} alt="" />
            <span>21545</span>
          </div>
        </NavLink>
        <NavLink activeClassName="navlink_active_class" to="/curious">
          {" "}
          <div className="LikesPopUp_middle_links">
            <img src={light} alt="" />
            <span>21545</span>
          </div>
        </NavLink>
      </div>{" "}
      <div className="LikesPopUp_bottom">
        <Switch>
          <Route exact path="/celebrate">
            <div className="LikesPopUp_bottom_info">
              <Avatar />
              <img className="LikesPopUp_bottom_image" src={heart} alt="" />
              <div className="LikesPopUp_personal">
                <span>Justin Igugu</span>
                <span>Description goes here</span>
              </div>
            </div>
          </Route>
        </Switch>{" "}
        <Switch>
          <Route exact path="/support">
            <div className="LikesPopUp_bottom_info">
              <Avatar />
              <img className="LikesPopUp_bottom_image" src={heart} alt="" />
              <div className="LikesPopUp_personal">
                <span>Justin Igugu</span>
                <span>Description goes here</span>
              </div>
            </div>
          </Route>
        </Switch>{" "}
        <Switch>
          <Route exact path="/insighful">
            <div className="LikesPopUp_bottom_info">
              <Avatar />
              <img className="LikesPopUp_bottom_image" src={heart} alt="" />
              <div className="LikesPopUp_personal">
                <span>Justin Igugu</span>
                <span>Description goes here</span>
              </div>
            </div>
          </Route>
        </Switch>{" "}
        <Switch>
          <Route exact path="/curious">
            <div className="LikesPopUp_bottom_info">
              <Avatar />
              <img className="LikesPopUp_bottom_image" src={heart} alt="" />
              <div className="LikesPopUp_personal">
                <span>Justin Igugu</span>
                <span>Description goes here</span>
              </div>
            </div>
          </Route>
        </Switch>{" "}
        <Switch>
          <Route exact path="/love">
            <div className="LikesPopUp_bottom_info">
              <Avatar />
              <img className="LikesPopUp_bottom_image" src={heart} alt="" />
              <div className="LikesPopUp_personal">
                <span>Justin Igugu</span>
                <span>Description goes here</span>
              </div>
            </div>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/like">
            <div className="LikesPopUp_bottom_info">
              <Avatar />
              <img className="LikesPopUp_bottom_image" src={heart} alt="" />
              <div className="LikesPopUp_personal">
                <span>Justin Igugu</span>
                <span>Description goes here</span>
              </div>
            </div>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/all">
            <div className="LikesPopUp_bottom_info">
              <Avatar />
              <img className="LikesPopUp_bottom_image" src={heart} alt="" />
              <div className="LikesPopUp_personal">
                <span>Justin Igugu</span>
                <span>Description goes here</span>
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </Modal>
  );
});
export default LikesPopUp;
