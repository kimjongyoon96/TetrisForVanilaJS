import { gameBoardCells } from "./index.js";
export function checkCompleteLines() {
  const rowsToRemove = []; // 완전히 채워진 줄의 인덱스를 저장할 배열
  console.log(rowsToRemove);
  for (let y = 0; y < 20; y++) {
    // 게임 보드의 모든 줄을 순회
    let isComplete = true; // 현재 줄이 완전히 채워졌다고 가정
    for (let x = 0; x < 10; x++) {
      // 해당 줄의 모든 셀을 순회
      const cellIndex = y * 10 + x; // 현재 셀의 1차원 배열 인덱스 계산
      console.log("check1");
      console.log(gameBoardCells[cellIndex]);
      if (
        !gameBoardCells[cellIndex] ||
        !gameBoardCells[cellIndex].classList.contains("occupied") ||
        !gameBoardCells[cellIndex].classList.contains("-block-90")
      ) {
        isComplete = false;
        break;
      }
    }
    if (isComplete) {
      rowsToRemove.push(y); // 현재 줄이 완전히 채워졌으면 해당 줄 인덱스를 배열에 추가
    }
  }
  return rowsToRemove; // 완전히 채워진 줄의 인덱스 배열 반환
}

// 결국, rowsToRemove 에 행의 값 (17열,18열이 들어간다.)
