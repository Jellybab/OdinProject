
function playerChoice(buttonClicked){
    let choice = buttonClicked.target.textContent.toLowerCase();
    switch(choice){
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

function computerChoice(){
    let choice = Math.floor(Math.random() * choices.length);
    return choice;
}

function playGame(buttonClicked){
    let player = playerChoice(buttonClicked);
    let computer = computerChoice();

    if(player == 3 ){
        console.log('dont try and cheat');
    }
    else if (player == computer){
        console.log('its a draw');
    }
    else if (player == 0 && computer == 2 ||
        player == 1 && computer == 0 ||
        player == 2 && computer == 1){
            console.log('well done you won');
            playerWins++;
        }
    else{
        console.log('you lose');
        computerWins++;
    }
    
}
//game data
const choices = ['rock', 'paper', 'scissors'];
let playerWins = 0;
let computerWins = 0;
const rounds = 5;

//getting buttons 
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', playGame))