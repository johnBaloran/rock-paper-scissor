const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const message = document.querySelector(".message");
const buttons = document.querySelectorAll(".btn");
const btnAgain = document.querySelector(".play-again");

let pScore = 0;
let cScore = 0;
playerScore.innerHTML = pScore;
computerScore.innerHTML = cScore;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    message.innerHTML = round(button.innerHTML);
    console.log(pScore);
    if (pScore === 5) {
      message.innerHTML = "You win the game!";
      buttons.forEach((button) => {
        button.disabled = true;
        button.style.display = "none";
      });
      btnAgain.disabled = false;
      btnAgain.style.display = "block";
    }
    if (cScore === 5) {
      message.innerHTML = "You lose the game!";
      buttons.forEach((button) => {
        button.disabled = true;
        button.style.display = "none";
      });
      btnAgain.disabled = false;
      btnAgain.style.display = "block";
    }
  });
});
btnAgain.addEventListener("click", () => {
  pScore = 0;
  cScore = 0;
  buttons.forEach((button) => {
    button.disabled = false;
    button.style.display = "inline-block";
  });
  btnAgain.style.display = "none";
  message.innerHTML = "Let's play!";
});

function computerPlay() {
  const weapons = ["rock", "paper", "scissor"];
  const randomNum = Math.floor(Math.random() * 3);
  console.log(randomNum);

  return weapons[randomNum];
}

function round(playerSelection, computerSelection = computerPlay()) {
  const player = playerSelection.toLowerCase();
  console.log(player);

  const computer = computerSelection.toLowerCase();
  console.log(computer);

  if (player === computer) {
    return "Tie";
  }
  if (
    (player === "rock" && computer === "scissor") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissor" && computer === "paper")
  ) {
    pScore++;

    playerScore.innerHTML = pScore;
    return "You Win!";
  }
  if (
    (player === "rock" && computer === "paper") ||
    (player === "paper" && computer === "scissor") ||
    (player === "scissor" && computer === "rock")
  ) {
    cScore++;
    computerScore.innerHTML = cScore;

    return "You Lose!";
  }
}
