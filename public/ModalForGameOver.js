import { gameBoardCells } from "./index.js";

export function gameOverModal() {
  if (isGameOver()) {
    document.getElementById("gameover").style.display = "block"; // 게임 오버 모달 표시
  }
}
function isGameOver() {
  for (let y = 0; y < 3; y++) {
    // 상단 3행을 순회 (0, 1, 2번 행)
    for (let x = 0; x < 10; x++) {
      // 각 행의 모든 셀을 순회
      const cellIndex = y * 10 + x;
      if (
        gameBoardCells[cellIndex] &&
        gameBoardCells[cellIndex].classList.contains("occupied")
      ) {
        return true; // 한 행이라도 occupied 상태인 셀이 있으면 true 반환 (게임 오버)
      }
    }
  }
  return false; // 상단 3행 중 occupied 상태인 셀이 없으면 false 반환 (게임 계속)
}
