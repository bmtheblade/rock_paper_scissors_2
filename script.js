// // let humanScore = 0;
// // let computerScore = 0;

// // function getComputerChoice() {
// //   let randomNumber = Math.round(Math.random() * 100) / 100;

// //   if (randomNumber <= 0.33) {
// //     console.log("Computer chose rock");
// //     return "rock";
// //   } else if (randomNumber <= 0.66) {
// //     console.log("Computer chose paper");
// //     return "paper";
// //   } else {
// //     console.log("Computer chose scissors");
// //     return "scissors";
// //   }
// // }

// // function getHumanChoice() {
// //   let isValid = false;
// //   let input;

// //   while (!isValid) {
// //     input = prompt("Choose between rock, paper or scissors").toLowerCase();
// //     if (input !== "rock" && input !== "paper" && input !== "scissors") {
// //       alert("Invalid information, choose between rock, paper or scissors");
// //     } else {
// //       isValid = true;
// //       console.log(`You chose ${input}`);
// //     }

// //     return input;
// //   }
// // }

// // function playGame(callback) {
// //   for (let i = 1; i <= 5; i++) {
// //     let round = playRound();

// //     function playRound(humanChoice, computerChoice) {
// //       function roundNumber() {
// //         console.log(`Round number ${[i]}`);
// //       }
// //       roundNumber();
// //       let humanSelection = getHumanChoice();
// //       let computerSelection = getComputerChoice();
// //       if (humanSelection === computerSelection) {
// //         console.log(
// //           `It's a draw! SCORE - you: ${humanScore} - computer: ${computerScore}`
// //         );
// //       } else if (
// //         (humanSelection === "rock" && computerSelection === "scissors") ||
// //         (humanSelection === "paper" && computerSelection === "rock") ||
// //         (humanSelection === "scissors" && computerSelection === "paper")
// //       ) {
// //         humanScore += 1;
// //         console.log(
// //           `You win! ${humanSelection} beats ${computerSelection}. SCORE - you: ${humanScore} - computer: ${computerScore}`
// //         );
// //       } else if (
// //         (computerSelection === "rock" && humanSelection === "scissors") ||
// //         (computerSelection === "paper" && humanSelection === "rock") ||
// //         (computerSelection === "scissors" && humanSelection === "paper")
// //       ) {
// //         computerScore += 1;
// //         console.log(
// //           `Computer wins! ${computerSelection} beats ${humanSelection}. SCORE - you: ${humanScore} - computer: ${computerScore}`
// //         );
// //       }
// //     }
// //   }
// //   callback();
// // }
// // function winner() {
// //   if (humanScore > computerScore) {
// //     console.log(
// //       `You won the game! Your score: ${humanScore} - Computer score: ${computerScore}`
// //     );
// //   } else if (humanScore === computerScore) {
// //     console.log(`It's a draw!`);
// //   } else {
// //     console.log(
// //       `The computer won the game! Your score: ${humanScore} - Computer score: ${computerScore}`
// //     );
// //   }
// // }

// // playGame(winner);

// let humanScore = 0;
// let computerScore = 0;

// function getComputerChoice() {
//   let randomNumber = Math.round(Math.random() * 100) / 100;

//   if (randomNumber <= 0.33) {
//     console.log("Computer chose rock");
//     return "rock";
//   } else if (randomNumber <= 0.66) {
//     console.log("Computer chose paper");
//     return "paper";
//   } else {
//     console.log("Computer chose scissors");
//     return "scissors";
//   }
// }
// // CODE FOR CONSOLE
// // function getHumanChoice() {
// //   let isValid = false;
// //   let input;

// //   while (!isValid) {
// //     input = prompt("Choose between rock, paper or scissors").toLowerCase();
// //     if (input !== "rock" && input !== "paper" && input !== "scissors") {
// //       alert("Invalid information, choose between rock, paper or scissors");
// //     } else {
// //       isValid = true;
// //       console.log(`You chose ${input}`);
// //     }

// //     return input;
// //   }
// // }

// // WORK WITH THIS BELOW
// // function getHumanChoice(choice) {
// //   let input = "";
// //   if (choice === "rock") {
// //     input = "rock";
// //   } else if (choice === "paper") {
// //     input = "paper";
// //   } else if (choice === "scissors") {
// //     input = "scissors";
// //   } else {
// //     input = "Unknown choice";
// //   }
// //   return input;
// // }

// // console.log(getHumanChoice());

// // function handleClick(choice) {
// //   const humanChoice = getHumanChoice(choice);
// // }

// // document.querySelector("#rock");
// // rock.addEventListener("click", function () {
// //   handleClick("rock");
// // });

// // document.querySelector("#paper");
// // paper.addEventListener("click", function () {
// //   handleClick("paper");
// // });

// // document.querySelector("#scissors");
// // scissors.addEventListener("click", function () {
// //   handleClick("scissors");
// // });

// // UNTIL HERE
// /////////-----------------

// function getHumanChoice(choice) {
//   let input = "";
//   if (choice === "rock") {
//     input = "rock";
//   } else if (choice === "paper") {
//     input = "paper";
//   } else if (choice === "scissors") {
//     input = "scissors";
//   } else {
//     input = "Unknown choice";
//   }
//   console.log(`${input}`);
//   return input;
// }

// const rock = document.querySelector("#rock");
// rock.addEventListener("click", function () {
//   getHumanChoice("rock");
// });

// const paper = document.querySelector("#paper");
// paper.addEventListener("click", function () {
//   getHumanChoice("paper");
// });

// const scissors = document.querySelector("#scissors");
// scissors.addEventListener("click", function () {
//   getHumanChoice("scissors");
// });

// function playGame(callback) {
//   for (let i = 1; i <= 5; i++) {
//     let round = playRound();

//     function playRound(humanChoice, computerChoice) {
//       function roundNumber() {
//         console.log(`Round number ${[i]}`);
//       }
//       roundNumber();
//       let humanSelection = getHumanChoice();
//       let computerSelection = getComputerChoice();
//       if (humanSelection === computerSelection) {
//         const div = document.createElement("div");
//         div.textContent = `It's a draw! SCORE - you: ${humanScore} - computer: ${computerScore}`;
//         document.body.appendChild(div);
//         // console.log(
//         //   `It's a draw! SCORE - you: ${humanScore} - computer: ${computerScore}`
//         // );
//       } else if (
//         (humanSelection === "rock" && computerSelection === "scissors") ||
//         (humanSelection === "paper" && computerSelection === "rock") ||
//         (humanSelection === "scissors" && computerSelection === "paper")
//       ) {
//         humanScore += 1;
//         console.log(
//           `You win! ${humanSelection} beats ${computerSelection}. SCORE - you: ${humanScore} - computer: ${computerScore}`
//         );
//       } else if (
//         (computerSelection === "rock" && humanSelection === "scissors") ||
//         (computerSelection === "paper" && humanSelection === "rock") ||
//         (computerSelection === "scissors" && humanSelection === "paper")
//       ) {
//         computerScore += 1;
//         console.log(
//           `Computer wins! ${computerSelection} beats ${humanSelection}. SCORE - you: ${humanScore} - computer: ${computerScore}`
//         );
//       }
//     }
//   }
//   callback();
// }
// function winner() {
//   if (humanScore > computerScore) {
//     console.log(
//       `You won the game! Your score: ${humanScore} - Computer score: ${computerScore}`
//     );
//   } else if (humanScore === computerScore) {
//     console.log(`It's a draw!`);
//   } else {
//     console.log(
//       `The computer won the game! Your score: ${humanScore} - Computer score: ${computerScore}`
//     );
//   }
// }

// playGame(winner);

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice(choice) {
  let input = "";
  if (choice === "rock") {
    input = "rock";
  } else if (choice === "paper") {
    input = "paper";
  } else if (choice === "scissors") {
    input = "scissors";
  } else {
    input = "Unknown choice";
  }
  return input;
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  let resultMessage = "";

  if (playerChoice === computerChoice) {
    resultMessage = `It's a draw! You both chose ${playerChoice}.`;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    resultMessage = `You win this round! ${playerChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    resultMessage = `You lose this round! ${computerChoice} beats ${playerChoice}.`;
  }

  updateDisplay(resultMessage);
}

function updateDisplay(resultMessage) {
  const resultDiv = document.querySelector("#result");
  const scoreDiv = document.querySelector("#score");
  const winnerDiv = document.querySelector("#winner");

  resultDiv.textContent = resultMessage;
  scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

  // Check for a winner
  if (playerScore === 5) {
    winnerDiv.textContent = "Congratulations! You are the champion!";
    resetGame();
  } else if (computerScore === 5) {
    winnerDiv.textContent = "Oh no! The computer is the champion!";
    resetGame();
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
}
document.querySelector("#rock").addEventListener("click", function () {
  const playerChoice = getHumanChoice("rock");
  playRound(playerChoice);
});

document.querySelector("#paper").addEventListener("click", function () {
  const playerChoice = getHumanChoice("paper");
  playRound(playerChoice);
});

document.querySelector("#scissors").addEventListener("click", function () {
  const playerChoice = getHumanChoice("scissors");
  playRound(playerChoice);
});
