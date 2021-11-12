"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// TODO refactor
// const updateNumber = function (value, ...values) {
//   document.querySelector(".number").textContent = value;
//   document.querySelector(".number").style.width = values;
//   document.querySelector(".number").textContent = values;
// };

const updateScore = function (newScoreValue) {
  document.querySelector(".score").textContent = newScoreValue;
};

const updateBackground = function (newBackground) {
  document.querySelector("body").style.backgroundColor = newBackground;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //   No input or not a number
  if (!guess) {
    displayMessage("Please, guess a number 🔢!");

    //   Player wins
  } else if (guess === secretNumber) {
    if (score > highscore) {
      highscore = score;
    }
    confetti.start();
    displayMessage("🏆 You Won! That's the correct number! 🏆");
    document.querySelector(".highscore").textContent = highscore;

    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";
    updateBackground("#60b347");

    // wrong guess
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high! 📈" : "Too low! 📉");
      score--;
      updateScore(score);
    } else {
      displayMessage("💥 You lost the game 😭. Try again! 💪");
      updateScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  confetti.stop();
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  updateScore(0);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";

  updateBackground("#222");
});
