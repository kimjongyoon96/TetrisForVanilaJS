import { checkCompleteLines } from "./checkCompleteLines.js";
import { gameBoardCells } from "./Common/index.js";

export function removecompleteLines(rowsToRemove) {
  rowsToRemove.forEach((y) => {
    // 완전히 채워진 줄의 인덱스에 대해 반복
    for (let x = 0; x < 10; x++) {
      // 해당 줄의 모든 셀을 순회
      const cellIndex = y * 10 + x; // 현재 셀의 1차원 배열 인덱스 계산
      console.log("check2");
      console.log(cellIndex);
      console.log(gameBoardCells[cellIndex].classList);

      gameBoardCells[cellIndex].classList.remove("occupied"); // 'occupied' 클래스 제거
      gameBoardCells[cellIndex].classList.remove("-block");
      gameBoardCells[cellIndex].classList.remove("-block-90");
      gameBoardCells[cellIndex].classList.remove(
        "I-block",
        "J-block",
        "L-block",
        "O-block",
        "S-block",
        "T-block",
        "Z-block"
      );
      gameBoardCells[cellIndex].classList.remove(
        "I-block-90",
        "J-block-90",
        "L-block-90",
        "O-block-90",
        "S-block-90",
        "T-block-90",
        "Z-block-90"
      );

      console.log("isOucupiedRemove?");
    }
  });
}

// ['cell', 'O-block', 'O-block-90', 'occupied', '-block-90', value: 'cell O-block O-block-90 occupied -block-90']
