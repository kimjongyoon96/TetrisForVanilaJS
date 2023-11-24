export function setupGameBoard(gameBoard) {
  const gameBoardCells = [];
  for (let i = 0; i < 200; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    gameBoard.appendChild(cell);
    gameBoardCells.push(cell);
  }

  return gameBoardCells;
}

//   const gameBoardCells = []; // 게임보드판 셀들을 배열에 넣는다.
//   for (let i = 0; i < 200; i++) {
//     const cell = document.createElement("div");
//     cell.classList.add("cell"); // css에 cell이라는 요소의 값을 추가하겠다.
//     gameBoard.appendChild(cell);
//     gameBoardCells.push(cell); // 배열에 셀 참조 추가
//   }

/* index.js에 있는 코드 모듈화 */
