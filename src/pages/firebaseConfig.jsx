// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPvIvQGfwUaWMG6CieEK-bGEBcheXIzsQ",
  authDomain: "twitter-c3ecd.firebaseapp.com",
  projectId: "twitter-c3ecd",
  storageBucket: "twitter-c3ecd.appspot.com",
  messagingSenderId: "725881398300",
  appId: "1:725881398300:web:fc8c6f0cff733a66226bd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;