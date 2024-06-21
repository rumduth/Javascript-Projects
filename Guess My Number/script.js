"use strict";

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let maximumGuess = 5;
let highScore = 0;


function winning(){
  document.querySelector("body").style.backgroundColor = "green";
  document.querySelector(".message").textContent = "🎉 Correct Number!";
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector(".retry").disabled = false;
  document.querySelector(".check").disabled = true;
  let winner = prompt("You win the game!\n What is your name?");
  highScore = Math.max(highScore, score);
  document.querySelector(".highscore").textContent = `${highScore} ${
    score === highScore ? winner : ""
  }`;
}

function losing(){
  document.querySelector(".message").textContent = "You lose 😭! Try again";
  document.querySelector("body").style.backgroundColor = "red";
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector(".retry").disabled = false;
  document.querySelector(".check").disabled = true;
  document.querySelector('.again').disabled = true;
}

function wrongPrediction(){
  document.querySelector(".score").textContent = --score;
  document.querySelector(".maximum-guess").textContent = --maximumGuess;
}

function reset(){
  score = 20;
  maximumGuess = 5;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".retry").disabled = true;
  document.querySelector(".check").disabled = false;
  document.querySelector('.again').disabled = false;

  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".maximum-guess").textContent = maximumGuess;
}



document.querySelector(".check").addEventListener("click", (e) => {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No number!";
  } else if (guess === secretNumber) {
   winning();
  } else{
    document.querySelector(".message").textContent = guess > secretNumber ? "📈 Too high!" :"📉 Too low!";
    wrongPrediction();
  }
  
  if (maximumGuess === 0) {
   losing();
  }
});

document.querySelector(".retry").addEventListener("click", (e) => {
  reset();
});


document.querySelector(".again").addEventListener('click',(e)=>{
 reset();
})


















