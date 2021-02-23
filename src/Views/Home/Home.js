import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./Home.scss";

function Home() {
  return (
    <div className="container">
      <div className="home">
        <div className="home-heading">
          <h1>Welcome to your Professional Community</h1>
        </div>
        <div className="home-search">
          <div className="search">
            <span>Search for a job</span>
            <ArrowForwardIosIcon />
          </div>
          <div className="search">
            <span>Find a person you know</span>
            <ArrowForwardIosIcon />
          </div>
          <div className="search">
            <span>Learn a new skill</span>
            <ArrowForwardIosIcon />
          </div>
        </div>
        <img
          alt="Welcome to your professional community"
          src="https://static-exp1.licdn.com/sc/h/3m4tgpbdz7gbldapvl63mrnxz"
        />
      </div>
    </div>
  );
}

export default Home;
