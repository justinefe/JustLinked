import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../features/user/userSlice";
import { useToasts } from "react-toast-notifications";
import {
  auth,
  googleProvider,
  facebookProvider,
  twiterProvider,
} from "../../firebase";
import "./Login.scss";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const { addToast } = useToasts();
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    if (!values.email || !values.password) {
      addToast("Email or password must be entered", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    auth
      .signInWithEmailAndPassword(values.email, values.password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
        addToast("Sign in successful", {
          appearance: "success",
          autoDismiss: true,
        });
        history.push("/feed");
      })
      .catch((error) => {
        addToast(`${error}`, {
          appearance: "error",
          autoDismiss: true,
        });
      });
  };

  const signInWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => {
        addToast(`${error.message}`, {
          appearance: "error",
          autoDismiss: true,
        });
      });
  };

  const signInWithFacebook = () => {
    auth
      .signInWithPopup(facebookProvider)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => {
        addToast(`${error.message}`, {
          appearance: "error",
          autoDismiss: true,
        });
      });
  };

  // const signInWithTwitter = () => {
  //   auth
  //     .signInWithPopup(twiterProvider)
  //     .then(({ userAuth }) => {
  //       dispatch(
  //         login({
  //           email: userAuth.user.email,
  //           uid: userAuth.user.uid,
  //           displayName: userAuth.user.displayName,
  //           photoURL: userAuth.user.photoURL,
  //         })
  //       );
  //     })
  //     .catch((error) => alert(error.message));
  // };
  return (
    <div className="login">
      <form>
        <input
          onChange={(e) =>
            setValues((preValues) => ({
              ...preValues,
              [e.target.name]: e.target.value,
            }))
          }
          type="text"
          name="email"
          placeholder="Email"
        />
        <input
          onChange={(e) =>
            setValues((preValues) => ({
              ...preValues,
              [e.target.name]: e.target.value,
            }))
          }
          type="password"
          name="password"
          placeholder="Password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>{" "}
      </form>
      <span className="social_or">Or</span>
      <div className="social__media">
        {/**
       
          <div
          onClick={signInWithTwitter}
          className="social_ social_media_twiter"
        >
          <TwitterIcon />
          <button>Twitter</button>
        </div>
        */}

        <div
          onClick={signInWithFacebook}
          className="social_ social_media_facebook"
        >
          <svg
            aria-hidden="true"
            class="svg-icon iconFacebook"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              d="M3 1a2 2 0 00-2 2v12c0 1.1.9 2 2 2h12a2 2 0 002-2V3a2 2 0 00-2-2H3zm6.55 16v-6.2H7.46V8.4h2.09V6.61c0-2.07 1.26-3.2 3.1-3.2.88 0 1.64.07 1.87.1v2.16h-1.29c-1 0-1.19.48-1.19 1.18V8.4h2.39l-.31 2.42h-2.08V17h-2.5z"
              fill="white"
            ></path>
          </svg>
          <button>Login with Facebook</button>
        </div>
        <div onClick={signInWithGoogle} className="social_ social_media_google">
          <svg
            aria-hidden="true"
            class="native svg-icon iconGoogle"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 002.38-5.88c0-.57-.05-.66-.15-1.18z"
              fill="#4285F4"
            ></path>
            <path
              d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 01-7.18-2.54H1.83v2.07A8 8 0 008.98 17z"
              fill="#34A853"
            ></path>
            <path
              d="M4.5 10.52a4.8 4.8 0 010-3.04V5.41H1.83a8 8 0 000 7.18l2.67-2.07z"
              fill="#FBBC05"
            ></path>
            <path
              d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 001.83 5.4L4.5 7.49a4.77 4.77 0 014.48-3.3z"
              fill="#EA4335"
            ></path>
          </svg>
          <button>Login with Google</button>
        </div>
      </div>
      <p>
        Not a member?{" "}
        <Link to="/register">
          {" "}
          <span className="login_register">Register Now</span>{" "}
        </Link>
      </p>
    </div>
  );
};

export default Login;
