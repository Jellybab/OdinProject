const GameBoard = (() => {
  const boardGrid = document.getElementById("grid")
  let gameBoard = [];

  const init = function () {
    for (let counter = 0; counter < 9; counter++){
      const gridCell = document.createElement('div');
      const cellImg = document.createElement('img');
      gridCell.appendChild(cellImg);
      gridCell.id = `grid-${counter}`;
      gridCell.dataset.player = '';
      gameBoard.push(gridCell)
      boardGrid.appendChild(gridCell);
    }
  };

  return {
    boardGrid: boardGrid,
    gameBoard,
    init
  };
})();

const Game = (() => {
  GameBoard.init();
  let gameBoard = GameBoard.gameBoard;
  let turn = 1;

  function play(e){
    if (e.target.dataset.player == ''){
      if (turn == 1) {
        turn = 2;
        e.target.dataset.player = 1;
        e.target.innerHTML = "X";
        if(checkWinner() == 1){
          window.alert("player 1 wins");
        }
      }
      else{
        turn = 1;
        e.target.dataset.player = 2;
        e.target.innerHTML = "O";
        if(checkWinner() == 2){
          window.alert("player 2 wins");
        }
      }
    }
  }

  function checkWinner(){
    if (gameBoard[0].dataset.player){
      if(gameBoard[0].dataset.player == gameBoard[4].dataset.player && gameBoard[0].dataset.player == gameBoard[8].dataset.player){
        return gameBoard[0].dataset.player;
      }
    }

    if (gameBoard[6].dataset.player){
      if(gameBoard[6].dataset.player == gameBoard[4].dataset.player && gameBoard[6].dataset.player == gameBoard[2].dataset.player){
        return gameBoard[6].dataset.player;
      }
    }

    for (let i = 0; i < 9; i = i + 3){
      if(gameBoard[i].dataset.player){
        if(gameBoard[i].dataset.player == gameBoard[i+1].dataset.player && gameBoard[i].dataset.player == gameBoard[i+2].dataset.player){
          return gameBoard[i].dataset.player;
        }
      }
    }

    for (let i = 0; i < 3; i++){
      if(gameBoard[i].dataset.player){
        if(gameBoard[i].dataset.player == gameBoard[i+3].dataset.player && gameBoard[i].dataset.player == gameBoard[i+6].dataset.player){
          return gameBoard[i].dataset.player;
        }
      }
    }
    return 0;
  }

  gameBoard.forEach(gridCell => {
    gridCell.addEventListener('click', play)
  })
})();
