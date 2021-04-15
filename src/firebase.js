// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB6bfXeN4aUJloXwUnriMa00U0aDvn4QCY",
  authDomain: "it-17798.firebaseapp.com",
  projectId: "it-17798",
  storageBucket: "it-17798.appspot.com",
  messagingSenderId: "389095163756",
  appId: "1:389095163756:web:fa52b9c770d44245869549",
  measurementId: "G-S1S5Z8ENFN",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db, auth};