
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

function showResults(playerWin) {

    const resultsSection = document.querySelector('#results');

    let newRound = document.createElement('div');
    newRound.setAttribute('class', 'round');
    newRound.setAttribute('id', 'round_'+currentRound)

    let roundTitle = document.createElement('h2');
    roundTitle.setAttribute('class', 'round_title')
    newRound.textContent = 'Round ' + currentRound; 
    newRound.appendChild(roundTitle);
    
    let roundAnnounce = document.createElement('p');
    if(playerWin){roundAnnounce.textContent = 'Well done you won this round';}
    else{roundAnnounce.textContent = 'Too bad you lose';}
    newRound.appendChild(roundAnnounce);

    resultsSection.insertBefore(newRound, resultsSection.childNodes[0]);



    currentRound++;
}

function playGame(buttonClicked) {
    let player = playerChoice(buttonClicked);
    let computer = computerChoice();
    let playerWin=false;
    if (player == 3) {
        console.log('dont try and cheat');
    }
    else if (player == computer) {
        console.log('its a draw');
    }
    else if (player == 0 && computer == 2 ||
        player == 1 && computer == 0 ||
        player == 2 && computer == 1) {
        console.log('well done you won');
        playerWins++;
        playerWin = true;
    }
    else {
        console.log('you lose');
        computerWins++;
    }

    showResults(playerWin);
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