const Pcrespuesta= getcomputerchoice();
const personaRespuesta= getHumanChoice();
const Scissor=0
const Rock=1
const Paper=2



function playGame() {
  const userChoice = document.getElementById("userChoice").value;
  console.log(userChoice);
  const computerChoice = getcomputerchoice();
  console.log(computerChoice);
}




