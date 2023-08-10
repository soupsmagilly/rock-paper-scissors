//array of options for computer and player to choose
const options = ["rock", "paper", "scissors"];

//generates computer's random selction from options
function getComputerChoice(){
    const choice = (options[Math.floor(Math.random() * options.length)]);
    console.log(choice)
    return choice; 
}
//determines the winner between the computer and the player
function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    } 
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        return "Player";
    } else {
        return "Computer";  
    }
} 

//displays message of who won the round
function playRound(playerSelection, computerSelection){
        const result = checkWinner(playerSelection, computerSelection)
        if(result == "Tie"){
            return 'It\'s a tie!'
        } 
        else if(result == "Player"){
            return `You win, ${playerSelection} beats ${computerSelection}!`
        }
        else{
            return `You lose, ${computerSelection} beats ${playerSelection}.`
        }
    }


const playerSelection = prompt("Enter your selection: rock, paper or scissors.").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));