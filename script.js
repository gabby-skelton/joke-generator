// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

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

ref.on('value', snapshot => {
  const data = snapshot.val();
  console.log(data);
});



/* click-listeners for containers */
const addJokeBtn = document.getElementById("add-joke-btn");
const jokeContainer = document.getElementById("joke-container");
const addJokeContainer = document.getElementById("add-joke-container");

const backBtn = document.getElementById("back-btn");

addJokeBtn.addEventListener("click", function() {
  jokeContainer.style.display = "none";
  addJokeContainer.style.display = "block";
});

backBtn.addEventListener("click", function() {
  jokeContainer.style.display = "block";
  addJokeContainer.style.display = "none";
});
