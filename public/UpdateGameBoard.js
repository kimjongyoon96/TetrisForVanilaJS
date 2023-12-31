/* 테트리미노가 움직일때, 흔적을 지우는 코드 */

import { currentTetrimino } from "./TetriminoCurrentPosition.js";
import { drawTetrimino } from "./drawTetrimino.js";
// import { setupGameBoard } from "./GameBoard.js";
import { gameBoardCells } from "./index.js";
export function updateGameBoard() {
  gameBoardCells.forEach((cell) => {
    if (cell && !cell.classList.contains("occupied")) {
      cell.classList.remove(currentTetrimino.type + "-block");
      cell.classList.remove(currentTetrimino.type + "-block-90");
    }
  });
  drawTetrimino(
    gameBoardCells,
    currentTetrimino.shape,
    currentTetrimino.position,
    currentTetrimino.type,
    currentTetrimino.rotation
  );
}
