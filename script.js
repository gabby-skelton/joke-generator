// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
import { collection, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCjTjR9PWc1Zf0nj4TrP-1MJT932cT_9Eo",
  authDomain: "joke-db-c60d8.firebaseapp.com",
  projectId: "joke-db-c60d8",
  storageBucket: "joke-db-c60d8.appspot.com",
  messagingSenderId: "175403930516",
  appId: "1:175403930516:web:59f674989c1901b5997581",
  measurementId: "G-6BG3SNRVQG",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase();
const myRef = collection(db, "jokes", "QonsxVvAxDzCrgl2pTJw");
const docSnap = await getDoc(myRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}

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
