import TetriminoGenerator from "./random.js";
import { drawTetrimino } from "./drawTetrimino.js";

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
  let currentTetrimino = {
    shape: [],
    position: [],
    type: [],
  };

  console.log(currentTetrimino);
  console.log("여기 제대로 오는가?");
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
    console.log(currentTetrimino.type);
    console.log(currentTetrimino);
  });
});
