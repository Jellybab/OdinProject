function createSquares(gridSize){
    const sketchArea = document.querySelector("#sketch-area");
    for(let i = 0; i < gridSize; i++){
        const row = document.createElement('div');
        row.setAttribute('draggable', 'false');
        row.setAttribute('class', 'row');
        for(let j = 0; j < gridSize; j++){
            const newSquare = document.createElement('div');
            newSquare.setAttribute('class', 'square');
            newSquare.setAttribute('draggable', 'false');
            row.appendChild(newSquare);
        }
        sketchArea.appendChild(row);
    }
    addMouseOver();
}

function clearGridButton(){
    let gridSize = prompt('What size do you want the grid?');
    const sketchArea = document.querySelector("#sketch-area");
    const grid = document.querySelectorAll('.row');
    grid.forEach(row => sketchArea.removeChild(row));
    createSquares(gridSize);
}

function changeColour(e){
    if(e.which == 1){
     e.target.style.backgroundColor = 'black';
    }
}

function addMouseOver(){
    const grid = document.querySelectorAll('.square');
    grid.forEach(square => square.addEventListener('mousemove', changeColour));
    grid.forEach(square => square.addEventListener('mousedown', changeColour));
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearGridButton);

createSquares(16);