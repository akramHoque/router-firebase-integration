// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn6ERqswMqxzStymqTTAfzNxGFaNzhP6A",
  authDomain: "router-firebase-itegration1.firebaseapp.com",
  projectId: "router-firebase-itegration1",
  storageBucket: "router-firebase-itegration1.appspot.com",
  messagingSenderId: "730665114087",
  appId: "1:730665114087:web:28273427a93245a0bc0542"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app ;