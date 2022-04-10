/* click-listeners for containers */
const addJokeBtn = document.getElementById("add-joke-btn");
const backBtn = document.getElementById("back-btn");
const generateJokeBtn = document.getElementById("new-joke-btn")
const addMyJokeBtn = document.getElementById("create-joke-btn")

const joke = document.getElementById("joke");

const jokeContainer = document.getElementById("joke-container");
const addJokeContainer = document.getElementById("add-joke-container");

addJokeBtn.addEventListener("click", function() {
  jokeContainer.style.display = "none";
  addJokeContainer.style.display = "block";
});

backBtn.addEventListener("click", function() {
  jokeContainer.style.display = "block";
  addJokeContainer.style.display = "none";
});

generateJokeBtn.addEventListener("click", function() {
  var randNum = Math.floor(Math.random() * jokeArray.length);
  joke.innerHTML = jokeArray[randNum];
});

addMyJokeBtn.addEventListener("click", function() {
  const input = document.getElementById("input").value;
  jokeArray.push(input);
  window.alert("Your jokes has been added!");
});

const jokeArray = [
"Why can't a leopard hide? He's always spotted.",
"Why did the football coach go to the bank? To get his quarter back.",
"Air used to be free at the gas station, now it costs 2.50. You want to know why? Inflation.",
"I tried to get a smart car the other day but they sold out too fast. Why? I guess I'm just a bit slow.",
"I told my wife that a husband is like a fine wine: we just get better with age. The next day she locked me in the cellar.",
"Did you hear about the claustrophobic astronaut? He just wanted a bit more space."
];
