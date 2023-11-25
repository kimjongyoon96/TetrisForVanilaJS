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

// css 에서 repeat(반복,배열)를 통해서  행부분을 만들었다 그런데, 열부분이 없다.
// 이는, setupGameBoard 를 통해서 구현을 하였다. => 정확하게 얘기하면, 200개의 DIV일 뿐이다.
// 이 함수는, index.js에서 전역변수로 할당을 하고, 이를 활용한다.

// 1. gameBoardCells 라는 빈 배별을 반들어준다.
// 2. 반복문을 활용한다 200개의 div를 cell에 할당한다.
// 3. cell의 classList에 cell이라는 클래스를 할당한다. 추후, 스타일링에 필요하다.
// 4. gameBoard 매개변수에 cell을 자식으로 둔다.
// 5. cell 을 gameBoardCells 에 집어넣는다.
// 6. cell을 배열의 요소로 집어넣은것은, 각 배열의 위치를 파악하기 위함이다.

/* index.js에 있는 코드 모듈화 */
