// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANxkLek3oyDBLxdLBn3q3kLIKUlLMcGVA",
  authDomain: "movie-e80db.firebaseapp.com",
  projectId: "movie-e80db",
  storageBucket: "movie-e80db.appspot.com",
  messagingSenderId: "528876911550",
  appId: "1:528876911550:web:d1557c9bfbc3d3637197ef",
  measurementId: "G-KWJN6H9HDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();