// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuFdGTZ5kxsavwpzifsulCzoqCndKwNAI",
  authDomain: "hyder-landing-page-prototype.firebaseapp.com",
  projectId: "hyder-landing-page-prototype",
  storageBucket: "hyder-landing-page-prototype.firebasestorage.app",
  messagingSenderId: "1043130417794",
  appId: "1:1043130417794:web:43a457f9d63388b0476a9b",
  measurementId: "G-JPYGFTD1SZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);