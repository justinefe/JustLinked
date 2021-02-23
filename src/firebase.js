import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDQb9KJ2A6eD4LR-lYr-wkiLeb_d2G5g1U",
  authDomain: "linkedin-justclone.firebaseapp.com",
  projectId: "linkedin-justclone",
  storageBucket: "linkedin-justclone.appspot.com",
  messagingSenderId: "216114712361",
  appId: "1:216114712361:web:9ef8ce2e29a7968b68f138",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const twiterProvider = new firebase.auth.TwitterAuthProvider();
export { db, auth, googleProvider, facebookProvider, twiterProvider };
