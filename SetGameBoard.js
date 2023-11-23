const gameBoardCells = [];

function setupGameBoard(gameBoard) {
  for (let i = 0; i < 200; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    gameBoard.appendChild(cell);
    gameBoardCells.push(cell); // 배열에 셀 참조 추가
  }
}

export { gameBoardCells, setupGameBoard };

// /* cell에 대한 참조를 위해 배열을 선언해주었다*/
//   const gameBoardCells = []; // 게임보드판 셀들을 배열에 넣는다.
//   for (let i = 0; i < 200; i++) {
//     const cell = document.createElement("div");
//     cell.classList.add("cell");
//     gameBoard.appendChild(cell);
//     gameBoardCells.push(cell); // 배열에 셀 참조 추가
//   }

/* index.js에 있는 코드 모듈화 */
