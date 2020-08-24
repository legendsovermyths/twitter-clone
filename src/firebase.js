import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBgCpIwqnerxkBnHzCJ3pK1YU2Rqt4gh_4",
  authDomain: "twitterclone-a8739.firebaseapp.com",
  databaseURL: "https://twitterclone-a8739.firebaseio.com",
  projectId: "twitterclone-a8739",
  storageBucket: "twitterclone-a8739.appspot.com",
  messagingSenderId: "1095130473263",
  appId: "1:1095130473263:web:0490fd9f358e929386f7da",
  measurementId: "G-506NC1TF6R",
});
const db = firebaseApp.firestore();
export { db };
