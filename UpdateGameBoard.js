/* 테트리미노가 움직일때, 흔적을 지우는 코드 */

import { currentTetrimino } from "./TetriminoCurrentPosition.js";
import { drawTetrimino } from "./drawTetrimino.js";
// import { setupGameBoard } from "./GameBoard.js";
import { gameBoardCells } from "./Common/index.js";

export function updateGameBoard() {
  gameBoardCells.forEach((cell) => {
    cell.classList.remove(currentTetrimino.type + "-block");
    cell.classList.remove(currentTetrimino.type + "-block-90"); // 추가된 클래스도 제거
    // 필요하다면, 다른 회전 상태에 대한 클래스도 여기에 추가
  });
  console.log("check");
  drawTetrimino(
    gameBoardCells,
    currentTetrimino.shape,
    currentTetrimino.position,
    currentTetrimino.type,
    currentTetrimino.rotation
  );
}
