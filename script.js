let humanScore = 0;
let computerScore = 0;

let randomNumber = Math.round(Math.random() * 100) / 100;

// console.log(randomNumber);

function getComputerChoice() {
  if (randomNumber <= 0.33) {
    console.log("Computer chose rock"); //to detele
    return "rock";
  } else if (randomNumber <= 0.66) {
    console.log("Computer chose paper"); //to detele
    return "paper";
  } else {
    console.log("Computer chose scissors"); //to detele
    return "scissors";
  }
}

// getComputerChoice();

function getHumanChoice() {
  let answer = prompt("Choose between rock, paper or scissors").toLowerCase();
  if (answer === "rock" || answer === "paper" || answer === "scissors") {
    console.log(`You chose ${answer}`);
  } else {
    console.log("Invalid information, choose between rock, paper or scissors");
  }
  //   console.log(answer); //to delete
  return answer;
}

// getHumanChoice();

// --------------------------------
// function playRound(humanChoice, computerChoice) {
//   let humanSelection = getHumanChoice();
//   let computerSelection = getComputerChoice();
//   if (humanSelection === computerSelection) {
//     console.log(
//       `It's a draw! SCORE - you: ${humanScore} - computer: ${computerScore}`
//     );
//   } else if (
//     (humanSelection === "rock" && computerSelection === "scissors") ||
//     (humanSelection === "paper" && computerSelection === "rock") ||
//     (humanSelection === "scissors" && computerSelection === "paper")
//   ) {
//     humanScore += 1;
//     console.log(
//       `You win! ${humanSelection} beats ${computerSelection}. SCORE - you: ${humanScore} - computer: ${computerScore}`
//     );
//   } else if (
//     (computerSelection === "rock" && humanSelection === "scissors") ||
//     (computerSelection === "paper" && humanSelection === "rock") ||
//     (computerSelection === "scissors" && humanSelection === "paper")
//   ) {
//     computerScore += 1;
//     console.log(
//       `Computer wins! ${computerSelection} beats ${humanSelection}. SCORE - you: ${humanScore} - computer: ${computerScore}`
//     );
//   }
// }
// -------------------------------
// playRound();

function playGame() {
  for (let i = 1; i <= 5; i++) {
    let round = playRound();

    function playRound(humanChoice, computerChoice) {
      let humanSelection = getHumanChoice();
      let computerSelection = getComputerChoice();
      if (humanSelection === computerSelection) {
        console.log(
          `It's a draw! SCORE - you: ${humanScore} - computer: ${computerScore}`
        );
      } else if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper")
      ) {
        humanScore += 1;
        console.log(
          `You win! ${humanSelection} beats ${computerSelection}. SCORE - you: ${humanScore} - computer: ${computerScore}`
        );
      } else if (
        (computerSelection === "rock" && humanSelection === "scissors") ||
        (computerSelection === "paper" && humanSelection === "rock") ||
        (computerSelection === "scissors" && humanSelection === "paper")
      ) {
        computerScore += 1;
        console.log(
          `Computer wins! ${computerSelection} beats ${humanSelection}. SCORE - you: ${humanScore} - computer: ${computerScore}`
        );
      }
    }
  }
}

playGame();
