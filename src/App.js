import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Views/Feed/Header";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/user/userSlice";
import "./App.scss";
import Sidebar from "./Views/Feed/Sidebar";
import Feed from "./Views/Feed/Feed";
import Login from "./Views/Login/Login";
import Signup from "./Views/Signup/SIgnup";
import Home from "./Views/Home/Home";
import Widgets from "./Views/Feed/Widgets";
import Nav from "./Views/Home/Nav";
import Send from "./Views/Feed/Send";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is login
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        {/* Header */}
        {!user ? (
          <Switch>
            <Route path="/register">
              <Nav />
              <Signup />
            </Route>
            <Route path="/login">
              <Nav />
              <Login />
            </Route>
            <Route>
              <Nav />
              <Home />
            </Route>
          </Switch>
        ) : (
          <>
            <Switch>
              <Route path="/">
                <Header />
                <div className="app_body">
                  {/* Sidebar */}
                  <Sidebar />
                  {/* Feed */}
                  <Feed />
                  {/* Widgets */}
                  <Widgets />
                </div>
              </Route>
              {/* <Route>
                <Nav />
                <Home />
             </Route>*/}
            </Switch>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
