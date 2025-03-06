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

let humanScore = 0;
let computerScore = 0;
