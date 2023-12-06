import { checkCompleteLines } from "./checkCompleteLines.js";
import { gameBoardCells } from "./index.js";
// import { updateScore } from "./scoreBoard.js";
export function removecompleteLines(rowsToRemove) {
  rowsToRemove.forEach((y) => {
    for (let x = 0; x < 10; x++) {
      const cellIndex = y * 10 + x;
      gameBoardCells[cellIndex].remove(); // DOM 요소 제거
      gameBoardCells[cellIndex] = undefined; // 배열에서 참조 제거
    }
  });

  // 배열에서 undefined 요소 제거
  let i = gameBoardCells.length;
  while (i--) {
    if (gameBoardCells[i] === undefined) {
      gameBoardCells.splice(i, 1);
    }
  }

  // 새 셀 추가
  addNewCells(gameBoard, gameBoardCells, rowsToRemove);
  removeDataIndex(gameBoard);
  addDataIndex(gameBoard);
  // todo => data-index 덮어씌우기
  // updateCellIndexes(gameBoardCells, rowsToRemove);
  // updateScore(rowsToRemove);
}
// 새 셀 추가 함수
function addNewCells(gameBoard, gameBoardCells, rowsToRemove) {
  // 제거된 행 중 가장 낮은 인덱스를 찾음
  const minRemovedIndex = Math.min(...rowsToRemove) * 10;

  // 새 셀 추가
  for (let i = 0; i < rowsToRemove.length * 10; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    // 새 셀의 data-index를 계산하여 설정
    const newIndex = minRemovedIndex + i;
    cell.setAttribute("data-index", newIndex);
    gameBoard.prepend(cell);
    gameBoardCells.unshift(cell);
  }

  //  const childrenOrigin = gameBoard.querySelectorAll("div");
  // const dataIndexes = Array.from(children).map((child) =>
  //   child.getAttribute("data-index")
  // );
  // dataIndexes.sort((a, b) => a - b);
  // console.log(gameBoard.firstchild);
  // console.log(dataIndexes);
}

function removeDataIndex(gameBoard) {
  const children = gameBoard.querySelectorAll("div");
  children.forEach((child) => {
    child.removeAttribute("data-index");
  });
}

function addDataIndex(gameBoard) {
  const childrenAdd = gameBoard.querySelectorAll("div");

  childrenAdd.forEach((child, index) => {
    child.setAttribute("data-index", index);
  });
}
// function updateCellIndexes(gameBoardCells, rowsToRemove) {
//   const numberOfRowsRemoved = rowsToRemove.length;
//   gameBoardCells.forEach((cell, index) => {
//     if (cell) {
//       const currentRow = Math.floor(index / 10);
//       // 제거된 행 위의 셀들만 `data-index` 업데이트
//       if (rowsToRemove.some((row) => currentRow > row)) {
//         const newRow = currentRow - numberOfRowsRemoved;
//         const newCellIndex = newRow * 10 + (index % 10);
//         cell.setAttribute("data-index", newCellIndex);
//       }
//     }
//     console.log("checkreal");
//   });
// }
//   Todo 클래스가 아닌 div 추가
//   Todo 점수 추가
// * class.add 와 class.remove 는 다르게 작동한다.. *//
// * add 는 type 에 맞는 모든 클래스 요소가 자동으로 추가된다 *//
// * 그러나, remove 메소드는 일일이 모든 클래스를 지정해줘야한다. *//

// *  gameBoardCells[cellIndex] = null; 과  gameBoardCells[cellIndex].remove()의 차이 *//
