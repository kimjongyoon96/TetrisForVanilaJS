import TetriminoGenerator from "./random.js";
import { drawTetrimino } from "./drawTetrimino.js";

document.addEventListener("DOMContentLoaded", () => {
  const gameBoard = document.getElementById("gameBoard");
  const startButton = document.getElementById("startButton");
  const tetriminoGenerator = new TetriminoGenerator();
  const cells = [];
  console.log(cells);

  /* cell에 대한 참조를 위해 배열을 선언해주었다*/
  const gameBoardCells = [];
  for (let i = 0; i < 200; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    gameBoard.appendChild(cell);
    gameBoardCells.push(cell); // 배열에 셀 참조 추가
  }

  startButton.addEventListener("click", () => {
    const randomTetrimino = tetriminoGenerator.getRandomTetrimino();
    console.log(randomTetrimino);

    const initialPosition = { x: 4, y: 0 }; // 예시 초기 위치
    console.log(initialPosition);
    const randomTetriminoData = tetriminoGenerator.getRandomTetrimino();
    drawTetrimino(
      gameBoardCells,
      randomTetriminoData.shape,
      initialPosition,
      randomTetriminoData.type
    );
  });

  console.log(drawTetrimino);
});
