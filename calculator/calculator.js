function buttonPressed(e){
    const key = parseInt(e.target.attributes["data-key"].value, 10);
    const screen = document.querySelector('#screen');
    switch(key){
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            screen.append(e.target.textContent);
            break;
        case 10:
            if(!screen.textContent.includes('.')){
                screen.append(e.target.textContent);
            }
            break;
        case 11:

            num2 = parseFloat(screen.textContent);
            clearScreen(screen);
            console.log(num1 + op + num2);
            num2 = calculate(screen);
            screen.append(num2);
            break;
        case 12:
        case 13:
        case 14:
        case 15:
            op = e.target.textContent;
            if(!screen.textContent == ''){
                num1 = parseFloat(screen.textContent);
            }
            clearScreen(screen);
            break;
        case 16:
            clearScreen(screen);
            break;
        case 17:
            screen.textContent = screen.textContent.slice(0,-1);
            break;
        default:
            clearScreen(screen);
            screen.append('ERROR');
            break;
    }
}

function clearScreen(screen){
    screen.textContent = null;
}


function calculate(){
    let sum = null;
    switch (op){
        case '+':
            sum = add(num1, num2);
            break;
        case '-':
            sum = sub(num1, num2);
            break;
        case '/':
            sum = div(num1, num2);
            break;
        case '*':
            sum = multi(num1, num2);
            break;
        default:
            screen.append('ERROR');
            break;
    }
    return sum;
}

function add(num1, num2){return num1+num2;}
function sub(num1, num2){return num1-num2;}
function div(num1, num2){return num1/num2;}
function multi(num1,num2){return num1*num2;}




let num1 = null;
let num2 = null;
let op = null;
const buttons = document.querySelectorAll('.calc-buttons');
buttons.forEach(key=>key.addEventListener('click', buttonPressed));