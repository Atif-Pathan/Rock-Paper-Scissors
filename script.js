document.body.setAttribute("class", "center-content")

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

const winner = document.createElement("p");
const playAgain = document.createElement("button");
playAgain.textContent = "Play Again"
const scores = document.querySelector(".scores")
const roundResult = document.querySelector(".round-result");
roundResult.textContent = "Are you Ready?.. Then, make you choice!";
const displayScore = document.querySelector(".running-score");
displayScore.textContent = `The current score is You[${humanScore}] - Computer[${computerScore}]`;

function tie () {
    roundResult.innerHTML = "This round was a <strong>TIE</strong>!";
}

function win () {
    roundResult.innerHTML = "You <strong>WIN</strong> this round!";
}

function lose () {
    roundResult.innerHTML = "Oh no, you <strong>LOSE</strong> this round!";
}

function checkScore() {
    // display the score
    displayScore.textContent = `The current score is You[${humanScore}] - Computer[${computerScore}]`;

    if (humanScore === 5 || computerScore === 5) {
        displayScore.textContent = `The current score is You[${humanScore}] - Computer[${computerScore}]`;
        winner.style.fontSize = "3.5rem";
        // we have a winner
        if (humanScore > computerScore) {
            winner.innerHTML = "<strong>YOU WIN!</strong>"
            winner.style.color =  "#4CAF50";
        }
        else {
            // you lost, computer wins
            winner.innerHTML = "<strong>YOU LOSE!</strong>"
            winner.style.color =  "#F44336";
        }
        scores.appendChild(winner);
        scores.appendChild(playAgain);
        setTimeout(() => {
            roundResult.textContent = "";
        }, 1000);
    }
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        tie();
    }
    else if (winsAgainst[humanChoice] === computerChoice) {
        win();
        humanScore++;
    }
    else {
        lose();
        computerScore++;
    }
    setTimeout(() => {
        roundResult.textContent = "Are you Ready?.. Then, make you choice!";
    }, 1000);
    checkScore();
    
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    displayScore.textContent = `The current score is You[${humanScore}] - Computer[${computerScore}]`;
    scores.removeChild(winner);
    scores.removeChild(playAgain);
    roundResult.textContent = "Are you Ready?.. Then, make you choice!"
}

const play = document.querySelector("#play");
const interface = document.querySelector(".interface");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => playRound("Rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("Paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("Scissors", getComputerChoice()));

playAgain.addEventListener("click", () => resetGame()); 