
function playerChoice(buttonClicked) {
    let choice = buttonClicked.target.textContent.toLowerCase();
    switch (choice) {
        case choices[0]:
            return 0;
        case choices[1]:
            return 1;
        case choices[2]:
            return 2;
        default:
            return 3;
    }
}

function computerChoice() {
    let choice = Math.floor(Math.random() * choices.length);
    return choice;
}

function showResults(winner) {

    const resultsSection = document.querySelector('#results');

    let newRound = document.createElement('div');
    newRound.setAttribute('class', 'round');
    newRound.setAttribute('id', 'round_'+currentRound)

    let roundTitle = document.createElement('h2');
    roundTitle.setAttribute('class', 'round_title')
    newRound.textContent = 'Round ' + currentRound; 
    newRound.appendChild(roundTitle);

    let roundAnnounce = document.createElement('p');
    if(winner == 1){roundAnnounce.textContent = 'Well done you won this round';}
    else if (winner == 2){roundAnnounce.textContent = 'Too bad you lose';}
    else{roundAnnounce.textContent = 'It\'s a draw';}
    newRound.appendChild(roundAnnounce);

    resultsSection.insertBefore(newRound, resultsSection.childNodes[0]);

    const playerScore = document.querySelector('#player');
    playerScore.textContent = 'Player Score: ' + playerWins;

    const computerScore = document.querySelector('#computer');
    computer.textContent = 'Computer Score: ' + computerWins;

    currentRound++;
}

function playGame(buttonClicked) {
    let player = playerChoice(buttonClicked);
    let computer = computerChoice();
    let winner = 0;
    if (player == 3) {
        console.log('dont try and cheat');
    }
    else if (player == computer) {
        console.log('its a draw');
        winner = 0;
    }
    else if (player == 0 && computer == 2 ||
        player == 1 && computer == 0 ||
        player == 2 && computer == 1) {
        console.log('well done you won');
        playerWins++;
        winner = 1;
    }
    else {
        console.log('you lose');
        computerWins++;
        winner = 2;
    }

    showResults(winner);
}


//game data
const choices = ['rock', 'paper', 'scissors'];
let playerWins = 0;
let computerWins = 0;
let currentRound = 1;
const rounds = 5;

//getting buttons 
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', playGame))