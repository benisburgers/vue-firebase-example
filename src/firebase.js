import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyD9reFrSI45tWV59iWjT_lGb_vTk3G5aO4",
  authDomain: "vue-firebase-c6b69.firebaseapp.com",
  databaseURL: "https://vue-firebase-c6b69.firebaseio.com",
  projectId: "vue-firebase-c6b69",
  storageBucket: "vue-firebase-c6b69.appspot.com",
  messagingSenderId: "217408786668",
  appId: "1:217408786668:web:b8abb5fa9b6623e1b955c9"
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection("users");
const postsCollection = db.collection("posts");
const commentsCollection = db.collection("comments");
const likesCollection = db.collection("likes");

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
};
