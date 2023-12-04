// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9uxbcRAW00LRMnYUJm1emR2SFk3hUEXM",
    authDomain: "todoappproject-a128e.firebaseapp.com",
    projectId: "todoappproject-a128e",
    storageBucket: "todoappproject-a128e.appspot.com",
    messagingSenderId: "765199519064",
    appId: "1:765199519064:web:2be792d92c6c1ab8ff292d",
    measurementId: "G-MZ42CBLXSX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;