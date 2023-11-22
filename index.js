import TetriminoGenerator from "./random.js";
// import { drawTetrimino } from "./drawTetrimino.js";

document.addEventListener("DOMContentLoaded", () => {
  const gameBoard = document.getElementById("gameBoard");
  const startButton = document.getElementById("startButton");
  const tetriminoGenerator = new TetriminoGenerator();

  for (let i = 0; i < 200; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    gameBoard.appendChild(cell);
  }

  startButton.addEventListener("click", () => {
    const randomTetrimino = tetriminoGenerator.getRandomTetrimino();
    console.log(randomTetrimino);
    const initialPosition = { x: 4, y: 0 }; // 예시 초기 위치
  });
});
