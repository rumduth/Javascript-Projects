"use strict";

const winningScore = 100;
let playerTurn = 0;

const player_0 = {
  player: document.querySelector(".player--0"),
  name: document.querySelector("#name--0"),
  score: document.querySelector("#score--0"),
  currentScore: document.querySelector("#current--0"),
};

const player_1 = {
  player: document.querySelector(".player--1"),
  name: document.querySelector("#name--1"),
  score: document.querySelector("#score--1"),
  currentScore: document.querySelector("#current--1"),
};

const players = [player_0, player_1];

const dice = document.querySelector(".dice");
const holdBtn = document.querySelector(".btn--hold");
const rollBtn = document.querySelector(".btn--roll");
const newBtn = document.querySelector(".btn--new");

const winningCondition = (e) => {
  if (Number(players[playerTurn].score.textContent) >= winningScore) {
    players[playerTurn].player.classList.add("player--winner");
    disablebElements();
    return true;
  }
  return false;
};

const disablebElements = (e) => {
  holdBtn.disabled = true;
  rollBtn.disabled = true;
  dice.classList.add("hidden");
};

const enableElements = (e) => {
  holdBtn.disabled = false;
  rollBtn.disabled = false;
  dice.classList.remove("hidden");
};

const rollDice = () => {
  const diceNumber = Math.floor(Math.random() * 6) + 1;
  dice.src = `dice-${diceNumber}.png`;
  return diceNumber;
};

const switchPlayer = () => {
  let numPlayer = players.length;
  players[playerTurn].player.classList.remove("player--active");
  players[playerTurn].currentScore.textContent = 0;
  playerTurn = (playerTurn + 1) % numPlayer;
  players[playerTurn].player.classList.add("player--active");
};

const updateCurrentScore = function () {
  const diceNumber = rollDice();
  if (diceNumber == 1) switchPlayer();
  else
    players[playerTurn].currentScore.textContent =
      Number(players[playerTurn].currentScore.textContent) + diceNumber;
};

const updateScore = function () {
  players[playerTurn].score.textContent =
    Number(players[playerTurn].score.textContent) +
    Number(players[playerTurn].currentScore.textContent);
  if (winningCondition()) return;
  switchPlayer();
};

const resetGame = (e) => {
  for (let player of players) {
    player.score.textContent = 0;
    player.currentScore.textContent = 0;
    player.player.classList.remove("player--active", "player--winner");
  }
  playerTurn = 0;
  players[playerTurn].player.classList.add("player--active");
  enableElements();
};

const getName = (e) => {
  let start = 1;
  for (let player of players) {
    player.name.textContent =
      prompt(`Enter player ${start} name: `) || `Player ${start}`;
    start++;
  }
};

const startGame = () => {
  getName();
  resetGame();
};

newBtn.addEventListener("click", startGame);
rollBtn.addEventListener("click", updateCurrentScore);
holdBtn.addEventListener("click", updateScore);

startGame();
