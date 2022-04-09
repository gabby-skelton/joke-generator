// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCjTjR9PWc1Zf0nj4TrP-1MJT932cT_9Eo",
  authDomain: "joke-db-c60d8.firebaseapp.com",
  projectId: "joke-db-c60d8",
  storageBucket: "joke-db-c60d8.appspot.com",
  messagingSenderId: "175403930516",
  appId: "1:175403930516:web:59f674989c1901b5997581",
  measurementId: "G-6BG3SNRVQG",
  databaseURL: "https://joke-db-c60d8-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();
