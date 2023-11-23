import TetriminoGenerator from "./random.js";
import { drawTetrimino } from "./drawTetrimino.js";
// import { movieDown } from "./MovingDown.js";

document.addEventListener("DOMContentLoaded", () => {
  const gameBoard = document.getElementById("gameBoard");
  const startButton = document.getElementById("startButton");
  const tetriminoGenerator = new TetriminoGenerator();
  const cells = [];
  console.log(cells);

  /* cell에 대한 참조를 위해 배열을 선언해주었다*/
  const gameBoardCells = []; // 게임보드판 셀들을 배열에 넣는다.
  console.log(gameBoardCells);
  for (let i = 0; i < 200; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    gameBoard.appendChild(cell);
    gameBoardCells.push(cell); // 배열에 셀 참조 추가
  }

  // 사용자 정보처리를 위한 객체의 필요성
  // 모듈 1 - TetrinoCurrentPosition.js
  let currentTetrimino = {
    shape: [],
    position: [],
    type: [],
  };

  console.log(currentTetrimino);

  startButton.addEventListener("click", () => {
    const randomTetriminoData = tetriminoGenerator.getRandomTetrimino();
    currentTetrimino.shape = randomTetriminoData.shape;
    currentTetrimino.position = { x: 4, y: 0 };
    currentTetrimino.type = randomTetriminoData.type;
    drawTetrimino(
      gameBoardCells,
      currentTetrimino.shape,
      currentTetrimino.position,
      currentTetrimino.type
    );
    console.log(currentTetrimino.type); // s
    console.log(currentTetrimino);
    console.log(currentTetrimino.position.y); //0
  });
  // 모듈2-movingDown.js
  function movieDown() {
    if (currentTetrimino.position.y < 19) {
      console.log("action");
      currentTetrimino.position.y += 1;
      updateGameBoard();
    }
    console.log(currentTetrimino.position.y);
  }
  // 모듈3-movingLeft.js
  function movieLeft() {
    if (currentTetrimino.position.x > 0) {
      console.log("actionleft");
      currentTetrimino.position.x -= 1;
      updateGameBoard();
    }
  }
  // 모듈4-movingRight.js
  function movieRight() {
    if (currentTetrimino.position.x < 9) {
      console.log("actionRight");
      currentTetrimino.position.x += 1;
      updateGameBoard();
    }
  }
  // 모듈5-updateGameBoard.js
  function updateGameBoard() {
    gameBoardCells.forEach((cell) =>
      cell.classList.remove("tetrimino", currentTetrimino.type + "-block")
    );
    drawTetrimino(
      gameBoardCells,
      currentTetrimino.shape,
      currentTetrimino.position,
      currentTetrimino.type
    );
    console.log("action2");
  }
  // current 정보를 바탕으로 테트리미노 조작 로직
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowLeft":
        movieLeft();
        console.log("왼쪽 눌렀다.");
        break;
      case "ArrowRight":
        movieRight();
        console.log("오른쪽 눌렀다.");
        break;
      case "ArrowDown":
        movieDown();
        console.log("아래버튼 눌렀다.");
        break;
      case "ArrowUp":
        console.log("회전버튼 눌렀다.");
        break;
    }
  });
});
