let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.round(Math.random() * 100) / 100;
  // console.log(randomNumber);
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
  let isValid = false;
  let input;

  while (!isValid) {
    input = prompt("Choose between rock, paper or scissors").toLowerCase();
    if (input !== "rock" && input !== "paper" && input !== "scissors") {
      alert("Invalid information, choose between rock, paper or scissors");
    } else {
      isValid = true;
      console.log(`You chose ${input}`);
    }

    return input;
  }
}

// getHumanChoice();

function playGame(callback) {
  for (let i = 1; i <= 5; i++) {
    let round = playRound();

    function playRound(humanChoice, computerChoice) {
      function roundNumber() {
        console.log(`Round number ${[i]}`);
      }
      roundNumber();
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
  callback();
}
function winner() {
  if (humanScore > computerScore) {
    console.log(
      `You won the game! Your score: ${humanScore} - Computer score: ${computerScore}`
    );
  } else if (humanScore === computerScore) {
    console.log(`It's a draw!`);
  } else {
    console.log(
      `The computer won the game! Your score: ${humanScore} - Computer score: ${computerScore}`
    );
  }
}
// winner();

playGame(winner);
