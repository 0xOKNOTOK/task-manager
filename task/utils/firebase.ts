// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0pnBFv8Gpq6bFq77qwRO8t4ko754GVC8",
  authDomain: "task-io-85855.firebaseapp.com",
  projectId: "task-io-85855",
  storageBucket: "task-io-85855.appspot.com",
  messagingSenderId: "9985684064",
  appId: "1:9985684064:web:ad84b3ba906cff9af70905",
  measurementId: "G-X8VTVYHKCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);