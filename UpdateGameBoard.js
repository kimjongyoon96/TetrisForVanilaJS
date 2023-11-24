import { drawTetrimino } from "./drawTetrimino.js";
import { currentTetrimino } from "./TetriminoCurrentPosition.js";
import { setupGameBoard } from "./GameBoard.js";

const gameBoardCells = setupGameBoard(gameBoard);

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

//   모듈6-updateGameBoard.js
//   function updateGameBoard() {
//     gameBoardCells.forEach((cell) =>
//       cell.classList.remove(currentTetrimino.type + "-block")
//     );
//     drawTetrimino(
//       gameBoardCells,
//       currentTetrimino.shape,
//       currentTetrimino.position,
//       currentTetrimino.type,
//       currentTetrimino.rotation
//     );
//   }
