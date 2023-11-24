// UpdateGameBoard.js
import { currentTetrimino } from "./TetriminoCurrentPosition.js";
import { drawTetrimino } from "./drawTetrimino.js";
// import { setupGameBoard } from "./GameBoard.js";
import { gameBoardCells } from "./Common/index.js";

// const gameBoardCells = setupGameBoard(gameBoard);
export function updateGameBoard() {
  gameBoardCells.forEach((cell) =>
    cell.classList.remove(currentTetrimino.type + "-block")
  );

  drawTetrimino(
    gameBoardCells,
    currentTetrimino.shape,
    currentTetrimino.position,
    currentTetrimino.type,
    currentTetrimino.rotation
  );
}
