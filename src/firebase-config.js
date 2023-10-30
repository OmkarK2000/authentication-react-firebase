// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy5XfhacQqr2ZWEwIo-i9uTexYDgJWeIU",
  authDomain: "authentication-react-fir-298e9.firebaseapp.com",
  projectId: "authentication-react-fir-298e9",
  storageBucket: "authentication-react-fir-298e9.appspot.com",
  messagingSenderId: "113639443095",
  appId: "1:113639443095:web:a1418d090fc58c6767b7d2",
  measurementId: "G-MPGPRK7B9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);