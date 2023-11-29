import TetriminoGenerator from "../random.js";
import { drawTetrimino } from "../drawTetrimino.js";
import { currentTetrimino } from "../TetriminoCurrentPosition.js";
import { setupGameBoard } from "../GameBoard.js";
import UserInputHandler from "../ClassForUserInput.js";
import { updateGameBoard } from "../UpdateGameBoard.js";
import { startCountdown } from "../Clock.js";
export const gameBoardCells = setupGameBoard(gameBoard); // 게임보드 모듈 from GameBoard.js

document.addEventListener("DOMContentLoaded", () => {
  const gameBoard = document.getElementById("gameBoard");
  const startButton = document.getElementById("startButton");
  const showGameOverPopup = document.getElementById("gameOverPopUp");
  const tetriminoGenerator = new TetriminoGenerator(); // 클래스 인스턴스 from random.js
  const userInputHandler = new UserInputHandler(gameBoardCells);

  startButton.addEventListener("click", () => {
    startCountdown(60);
    const randomTetriminoData = tetriminoGenerator.getRandomTetrimino();
    currentTetrimino.shape = randomTetriminoData.shape;
    currentTetrimino.position = { x: 4, y: 0 };
    currentTetrimino.type = randomTetriminoData.type;
    currentTetrimino.width = randomTetriminoData.width;
    currentTetrimino.rotation = randomTetriminoData.rotation;
    drawTetrimino(
      gameBoardCells,
      currentTetrimino.shape,
      currentTetrimino.position,
      currentTetrimino.type,
      currentTetrimino.rotation
    );
  });
});
