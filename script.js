console.log("Welcome to a very fun game of...\n.\n.\n.\n.\n.\n.\n.\nROCK PAPER AND SCISSSORRR! \n\nClick Play to begin!");

let humanScore = 0;
let computerScore = 0;

// Map to define what beats what
const winsAgainst = {
  Rock: 'Scissors',
  Scissors: 'Paper',
  Paper: 'Rock'
};

function getComputerChoice() {
    const move = Math.floor(Math.random() * 3);
    if (move === 0) {
        return "Rock";
    }
    else if (move === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getHumanChoice() {
    const user_input = prompt("Whats your move?\nROCK\nPAPER\nSCISSORS")
    if (user_input.toLowerCase() === "rock") {
        return "Rock";
    }
    else if (user_input.toLowerCase() === "paper") {
        return "Paper";
    }
    else if (user_input.toLowerCase() === "scissors") {
        return "Scissors";
    }
    else{
        return getHumanChoice();
    }
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a Tie!");
    }
    else if (winsAgainst[humanChoice] === computerChoice) {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    }
    else {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
}

function playGame() {
    for (let index = 0; index < 5; index++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound (humanChoice, computerChoice);
    }
    console.log(`Final Score:\nYou - ${humanScore}\nComputer - ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You Win the game! Congratulations!");
    }
    else if (humanScore < computerScore) {
        console.log("You Lose the game! Better luck next time!");
    }
    else {
        console.log("It's a Tie! Wanna try again?");
    }
    // reset the score if the player wants to play again
    console.log("\nClick play to play again!\n\n");
    humanScore = 0
    computerScore = 0
}

document.addEventListener('DOMContentLoaded', function() {
    // Attach the event listener to the button
    document.getElementById('play').addEventListener('click', playGame);
  });