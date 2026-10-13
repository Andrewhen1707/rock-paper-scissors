console.log("Hello World");

function getComputerChoice() {
  const randomNumber = Math.random();
  const choiceIndex = Math.floor(randomNumber * 3);

  const choices = ["rock", "paper", "scissors"];
  return choices[choiceIndex];
}

function getHumanChoice() {
  return prompt("Elige: rock, paper o scissors");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    console.log("Tú elegiste:", humanChoice);
    console.log("La computadora eligió:", computerChoice);

    if (humanChoice === computerChoice) {
      console.log("¡Empate!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`¡Ganaste la ronda! ${humanChoice} vence a ${computerChoice}.`);
    } else {
      computerScore++;
      console.log(`¡Perdiste la ronda! ${computerChoice} vence a ${humanChoice}.`);
    }

    console.log(`Marcador: Tú ${humanScore} - ${computerScore} Computadora`);
  }

  // Cada llamada obtiene elecciones nuevas.
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  if (humanScore > computerScore) {
    console.log("¡Ganaste la partida!");
  } else if (computerScore > humanScore) {
    console.log("La computadora ganó la partida.");
  } else {
    console.log("La partida terminó en empate.");
  }
}