

function createSquares(numberOfSquares){
    const sketchArea = document.querySelector("#sketch-area");
    for(let i = 0; i < numberOfSquares; i++){
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        for(let j = 0; j < numberOfSquares; j++){
            const newSquare = document.createElement('div');
            newSquare.setAttribute('class', 'squares');
            row.appendChild(newSquare);
        }
        sketchArea.appendChild(row);
    }
}


createSquares(16);