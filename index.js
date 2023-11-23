import TetriminoGenerator from "./random.js";
import { drawTetrimino } from "./drawTetrimino.js";

// import { gameBoardCells, setupGameBoard } from "./SetGameBoard.js";
// import { movieDown } from "./MovingDown.js";
// import { updateGameBoard } from "./movement/UpdateGameBoard.js";

document.addEventListener("DOMContentLoaded", () => {
  const gameBoard = document.getElementById("gameBoard");
  const startButton = document.getElementById("startButton");
  const tetriminoGenerator = new TetriminoGenerator();

  let currentTetrimino = {
    shape: [],
    position: [],
    type: [],
    rotation: 0,
  };
  const gameBoardCells = []; // 게임보드판 셀들을 배열에 넣는다.
  for (let i = 0; i < 200; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    gameBoard.appendChild(cell);
    gameBoardCells.push(cell); // 배열에 셀 참조 추가
  }

  startButton.addEventListener("click", () => {
    const randomTetriminoData = tetriminoGenerator.getRandomTetrimino();
    console.log(currentTetrimino);
    currentTetrimino.shape = randomTetriminoData.shape;
    currentTetrimino.position = { x: 4, y: 0 };
    currentTetrimino.type = randomTetriminoData.type;
    drawTetrimino(
      gameBoardCells,
      currentTetrimino.shape,
      currentTetrimino.position,
      currentTetrimino.typev
    );
    console.log(currentTetrimino.type); // s
  });
  // 모듈2-movingDown.js
  function movieDown() {
    if (currentTetrimino.position.y < 19) {
      currentTetrimino.position.y += 1;
      updateGameBoard();
    }
    console.log(currentTetrimino.position.y);
  }
  // 모듈3-movingLeft.js
  function movieLeft() {
    if (currentTetrimino.position.x > 0) {
      currentTetrimino.position.x -= 1;
      updateGameBoard();
    }
  }
  // 모듈4-movingRight.js
  function movieRight() {
    if (currentTetrimino.position.x < 9) {
      currentTetrimino.position.x += 1;
      updateGameBoard();
    }
  }
  // 모듈5-movingRotation.js
  function movieRotate() {
    currentTetrimino.rotation = (currentTetrimino.rotation + 90) % 360;
    console.log(currentTetrimino.rotation); // 회전방향 즉 90도,180도,270도..
    let rotatedType = currentTetrimino.type + currentTetrimino.rotation;
    if (currentTetrimino.rotation === 0) {
      currentTetrimino.rotation = 0;
      rotatedType = currentTetrimino.type;
      console.log("cut");

      console.log(rotatedType);
      console.log(currentTetrimino.type);
      console.log(currentTetrimino.rotation);
    }

    // if (currentTetrimino.rotation != 0) {
    //   const rotatedType = currentTetrimino.type + currentTetrimino.rotation;
    // } else {
    //   const rotatedType = currentTetrimino.type;
    // }

    console.log(rotatedType); // z90, z180, z270, z0

    currentTetrimino.shape = tetriminoGenerator.tetriminos[rotatedType];
    updateGameBoard();
  }

  //   모듈6-updateGameBoard.js
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
        movieRotate();
        console.log("회전버튼 눌렀다.");
        break;
    }
  });
});
