/* 테트리미노가 움직일때, 흔적을 지우는 코드 */

import { currentTetrimino } from "./TetriminoCurrentPosition.js";
import { drawTetrimino } from "./drawTetrimino.js";
// import { setupGameBoard } from "./GameBoard.js";
import { gameBoardCells } from "./Common/index.js";

// const gameBoardCells = setupGameBoard(gameBoard);
export function updateGameBoard() {
  gameBoardCells.forEach((cell) =>
    cell.classList.remove(currentTetrimino.type + "-block")
  );
  console.log(currentTetrimino);
  drawTetrimino(
    gameBoardCells,
    currentTetrimino.shape,
    currentTetrimino.position,
    currentTetrimino.type,
    currentTetrimino.rotation
  );
}
