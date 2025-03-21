const choicesButtons = document.querySelectorAll("[data-btn-id]");
const displayResults = document.querySelector("[data-id='display-results']");
const displayScore = displayResults.childNodes[1];
const displayMessage = displayResults.childNodes[3];
const playAgainButton = document.querySelector("[data-id='play-again-btn']");

playGame();

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  choicesButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
    button.classList.add("game__choice_hover");
  });

  playAgainButton.addEventListener("click", resetGame);

  function resetGame() {
    humanScore = 0;
    computerScore = 0;
    displayScore.textContent = "";
    displayMessage.textContent = "";
    playAgainButton.classList.add("game__play-again-btn_hidden");
    choicesButtons.forEach((button) => {
      button.addEventListener("click", handleClick);
      button.classList.add("game__choice_hover");
    });
  }

  function handleClick(e) {
    let humanChoice = e.target.dataset.btnId;
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    if (humanScore == 5 || computerScore == 5) {
      choicesButtons.forEach((button) => {
        button.removeEventListener("click", handleClick);
        button.classList.remove("game__choice_hover");
      });
      printResults(humanScore, computerScore);
      playAgainButton.classList.remove("game__play-again-btn_hidden");
    }
  }

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    const winner = getWinner(humanChoice, computerChoice);

    humanChoice = capitalize(humanChoice);
    computerChoice = capitalize(computerChoice);
    let roundMessage = "";

    if (winner === "tie") {
      roundMessage = "This round it's a tie";
    } else if (winner === "human") {
      roundMessage = `You win this round! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
    } else if (winner === "computer") {
      roundMessage = `You lose this round! ${computerChoice} beats ${humanChoice}`;
      computerScore++;
    }

    let finalScore = `Player: ${humanScore} - Computer: ${computerScore}`;
    displayScore.textContent = finalScore;
    displayMessage.textContent = roundMessage;
  }
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const choiceIndex = Math.floor(Math.random() * 3);
  const choice = choices[choiceIndex];

  return choice;
}

function getWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "human";
  } else {
    return "computer";
  }
}

function capitalize(word) {
  const firstLetter = word.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = word.slice(1);
  const capitalizedWord = firstLetterCap + remainingLetters;

  return capitalizedWord;
}

function printResults(humanScore, computerScore) {
  let finalMessage = "";
  if (humanScore > computerScore) {
    finalMessage = "Player wins!";
  } else {
    finalMessage = "Computer wins!";
  }

  displayMessage.textContent = finalMessage;
}
