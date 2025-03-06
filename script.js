function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];

  const choiceIndex = Math.floor(Math.random() * 3);

  const choice = choices[choiceIndex];

  return choice;
}
