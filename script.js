const buttons = document.querySelectorAll(".btn");
const playAgain = document.querySelector(".playagain");
const winingMsg = document.querySelector(".msg");
const newGame = document.querySelector(".newgame");
const messageContainer = document.querySelector(".msgcontainer");

let turn0 = true;

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turn0) {
      btn.innerText = "0";
      btn.style.color = "red";
      turn0 = false;
    } else {
      btn.innerText = "X";
      btn.style.color = "yellow";

      turn0 = true;
    }
    btn.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let patterns of winningPatterns) {
    const positionVal1 = buttons[patterns[0]].innerText;
    const positionVal2 = buttons[patterns[1]].innerText;
    const positionVal3 = buttons[patterns[2]].innerText;
    if (positionVal1 != "" && positionVal2 != "" && positionVal3 != "") {
      if (positionVal1 === positionVal2 && positionVal2 === positionVal3) {
        showWinner(positionVal1);
      }
    }
  }
};

const showWinner = (winner) => {
  winingMsg.innerText = `Congratulations,The Winner is ${winner}`;
  console.log(winner);
  messageContainer.classList.remove("hide");
  disabledButtons();
};

const disabledButtons = () => {
  for (let btn of buttons) {
    btn.disabled = true;
  }
};

const enableddButtons = () => {
  for (let btn of buttons) {
    btn.disabled = false;
    btn.innerText = "";
  }
};

const resetGame = () => {
  turn0 = true;
  enableddButtons();
  messageContainer.classList.add("hide");
};

playAgain.addEventListener("click", resetGame);

newGame.addEventListener("click", resetGame);
