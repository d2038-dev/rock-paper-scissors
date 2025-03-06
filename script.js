function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];

  const choiceIndex = Math.floor(Math.random() * 3);

  const choice = choices[choiceIndex];

  return choice;
}

function getHumanChoice() {
  const choice = prompt("rock, paper, scissors?");

  return choice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  const winner = getWinner(humanChoice, computerChoice);

  humanChoice = capitalize(humanChoice);
  computerChoice = capitalize(computerChoice);

  if (winner === "tie") {
    console.log("It's a tie");
  } else if (winner === "human") {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else if (winner === "computer") {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
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

let humanScore = 0;
let computerScore = 0;
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
