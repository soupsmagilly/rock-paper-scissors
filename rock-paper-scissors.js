let playerScore = 0;
let compScore = 0;

const computerPlay = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * arrOfChoices.length)
    return arrOfChoices[randomNum];
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return `It\'s a tie, you both picked ${playerSelection}!`; 
    } else if (
        playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++;
            return `You win this round, ${playerSelection} beats ${computerSelection}!`;
    } else if (
        computerSelection === 'rock' && playerSelection === 'scissors' ||
        computerSelection === 'paper' && playerSelection === 'rock' ||
        computerSelection === 'scissors' && playerSelection === 'paper') {
            compScore++;
            return `The computer got the best of you, ${computerSelection} beats ${playerSelection}. You lose!`;
    }
        
    
}

const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose your weapon', 'Rock, Paper, or Scissors').toLowerCase();
        const computerSelection = computerPlay(); 
        console.log('1 ', playRound(playerSelection, computerSelection));
    }

    if (playerScore > compScore) {
        return 'Your beat the computer! Way to go!';
    } else if (playerScore < compScore) {
        return 'Your got beat by the computer! You need to work on your throws.';
    } else {
        return 'You tied with the computer. Not to shabby!';
    }
}

console.log(game());
