//array of options for computer and player to choose
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

//generates computer's random selction from options
function getComputerChoice() {
    let choices = [ROCK, PAPER, SCISSORS];
    let random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}

//determines the winner between the computer and the player
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
           return "It's a tie!";
    } else if (
        (playerChoice === ROCK && computerChoice === SCISSORS) ||
        (playerChoice === PAPER && computerChoice === ROCK) ||
        (playerChoice === SCISSORS &&  computerChoice === PAPER)) {   
            return "Hurray, you win!";    
    } else {
        return "Sorry, you lose.";
    }    
}

//displays message of who won the round
let computerChoice = getComputerChoice();
let playerChoice = prompt("Choose your weapon.");
console.log("player: " + playerChoice);
console.log("computer: " + computerChoice);
console.log(playRound(playerChoice, computerChoice));

