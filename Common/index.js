import TetriminoGenerator from "../random.js";
import { drawTetrimino } from "../drawTetrimino.js";
import { currentTetrimino } from "../TetriminoCurrentPosition.js";
import { setupGameBoard } from "../GameBoard.js";
import UserInputHandler from "../ClassForUserInput.js";
import { updateGameBoard } from "../UpdateGameBoard.js";
import { gameOverModal } from "../ModalForGameOver.js";
import { startCountdown } from "../Clock.js";
export let gameBoardCells = setupGameBoard(gameBoard); // 게임보드 모듈 from GameBoard.js

document.addEventListener("DOMContentLoaded", () => {
  const gameBoard = document.getElementById("gameBoard");
  const startButton = document.getElementById("startButton");
  const resumeButton = document.getElementById("resumeButton");
  const restartButton = document.getElementById("restartButton");
  const pauseModal = document.getElementById("pauseModal");
  const tetriminoGenerator = new TetriminoGenerator(); // 클래스 인스턴스 from random.js
  const userInputHandler = new UserInputHandler(gameBoardCells);
  gameOverModal();
  document.getElementById("stopButton").addEventListener("click", function () {
    document.getElementById("pauseModal").style.display = "block"; // 모달 표시
  });

  restartButton.addEventListener("click", function () {
    pauseModal.style.display = "none"; // 모달 숨김
    location.reload(); // 페이지 새로고침으로 게임 다시 시작
  });

  resumeButton.addEventListener("click", function () {
    pauseModal.style.display = "none"; // 모달 숨김
  });

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
    console.log(currentTetrimino.positon);
    console.log(currentTetrimino);
  });
});
