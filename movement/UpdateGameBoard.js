import { gameBoardCells } from "../SetGameBoard.js";
import { drawTetrimino } from "../drawTetrimino.js";
import { currentTetrimino } from "./TetriminoCurrentPosition.js";
// 모듈6-updateGameBoard.js
function updateGameBoard() {
  gameBoardCells.forEach((cell) =>
    cell.classList.remove("tetrimino", currentTetrimino.type + "-block")
  );
  drawTetrimino(
    gameBoardCells,
    currentTetrimino.shape,
    currentTetrimino.position,
    currentTetrimino.type,
    currentTetrimino.rotation
  );
}

export { updateGameBoard };
