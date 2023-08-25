const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const playerScoreSpan = document.querySelector('.player-score');
const compScoreSpan = document.querySelector('.comp-score');




let playerScore = 0;
let compScore = 0;


const computerPlay = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * arrOfChoices.length)
    return arrOfChoices[randomNum];
}

const playRound = (playerSelection, computerSelection) => {
    console.log(playerSelection, computerSelection);
    if (playerSelection === computerSelection) {
    const p = document.createElement('p');
    p.innerText = `It\'s a tie, you both picked ${playerSelection}!`; 
    outcomeDiv.appendChild(p);
    } else if (
            playerSelection === 'rock' && computerSelection === 'scissors' ||
            playerSelection === 'paper' && computerSelection === 'rock' ||
            playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++;
    const p = document.createElement('p');
    p.innerText = `You win this round, ${playerSelection} beats ${computerSelection}!`;
    outcomeDiv.appendChild(p);
    } else if (
            computerSelection === 'rock' && playerSelection === 'scissors' ||
            computerSelection === 'paper' && playerSelection === 'rock' ||
            computerSelection === 'scissors' && playerSelection === 'paper') {
    compScore++;
    const p = document.createElement('p');
    p.innerText = `The computer got the best of you, ${computerSelection} beats ${playerSelection}. You lose!`;
    outcomeDiv.appendChild(p);
    } 
}

const checkForWinner = (playerScore, compScore) => {
    console.log(playerScore, compScore)
    if (playerScore === 5) {
        const h2 = document.createElement('h2');
        h2.classList.add('player-won');
        h2.innerText = 'You beat the computer! Way to go!';
        outcomeDiv.append(h2);
    }
    if (compScore === 5) {
        const h2 = document.createElement('h2');
        h2.classList.add('comp-won');
        h2.innerText = 'The computer won. You need to work on your throws.';
        outcomeDiv.append(h2);
    }
}
 
const updateScores = (playerScore, compScore) => {
    playerScoreSpan.innerText = `Player Score: ${playerScore}`;
    compScoreSpan.innerText = `Computer Score: ${compScore}`;
}

rockBtn.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, compScore);
    checkForWinner(playerScore, compScore)
});

paperBtn.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, compScore);
    checkForWinner(playerScore, compScore);
});

scissorsBtn.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, compScore);
    checkForWinner(playerScore, compScore);
});

document.getElementsByClassName('#playerScore').innerText = (playerScore);
// const game = () => {
//    for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt('Choose your weapon', 'Rock, Paper, or Scissors').toLowerCase();
//         const computerSelection = computerPlay(); 
//         console.log('1 ', playRound(playerSelection, computerSelection));
//     } 

//     if (playerScore > compScore) {
//         return 'Your beat the computer! Way to go!';
//     } else if (playerScore < compScore) {
//         return 'Your got beat by the computer! You need to work on your throws.';
//     } else {
//         return 'You tied with the computer. Not to shabby!';
//     }
// }

// console.log(game());
