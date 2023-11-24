import TetriminoGenerator from "../random.js";
import { drawTetrimino } from "../drawTetrimino.js";
import { currentTetrimino } from "../TetriminoCurrentPosition.js";
import { setupGameBoard } from "../GameBoard.js";
import UserInputHandler from "../ClassForUserInput.js";
import { updateGameBoard } from "../UpdateGameBoard.js";

export const gameBoardCells = setupGameBoard(gameBoard); // 게임보드 모듈 from GameBoard.js

document.addEventListener("DOMContentLoaded", () => {
  const gameBoard = document.getElementById("gameBoard");
  const startButton = document.getElementById("startButton");
  const tetriminoGenerator = new TetriminoGenerator(); // 클래스 인스턴스 from random.js
  const userInputHandler = new UserInputHandler(gameBoardCells);

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
      currentTetrimino.type
    );
    console.log(currentTetrimino.type); // s
  });

  // //   모듈1-movingDown.js
  // function movieDown() {
  //   if (currentTetrimino.position.y < 19) {
  //     currentTetrimino.position.y += 1;
  //     updateGameBoard();
  //   }
  //   console.log(currentTetrimino.position.y);
  // }
  // // 모듈2-movingLeft.js
  // function movieLeft() {
  //   if (currentTetrimino.position.x > 0) {
  //     currentTetrimino.position.x -= 1;
  //     updateGameBoard();
  //   }
  // }
  // // 모듈3-movingRight.js
  // function movieRight() {
  //   if (currentTetrimino.position.x < 9) {
  //     currentTetrimino.position.x += 1;
  //     updateGameBoard();
  //   }
  // }
  // // 모듈4-movingRotation.js
  // function movieRotate() {
  //   currentTetrimino.rotation = (currentTetrimino.rotation + 90) % 360;
  //   console.log(currentTetrimino.rotation); // 회전방향 즉 90도,180도,270도..
  //   let rotatedType = currentTetrimino.type + currentTetrimino.rotation;
  //   if (currentTetrimino.rotation === 0) {
  //     currentTetrimino.rotation = 0;
  //     rotatedType = currentTetrimino.type;
  //     console.log("cut");
  //   }

  //   console.log(rotatedType); // z90, z180, z270, z0

  //   currentTetrimino.shape = tetriminoGenerator.tetriminos[rotatedType];
  //   updateGameBoard();
  // }

  // // current 정보를 바탕으로 테트리미노 조작 로직
  // document.addEventListener("keydown", (e) => {
  //   switch (e.key) {
  //     case "ArrowLeft":
  //       movieLeft();
  //       console.log("왼쪽 눌렀다.");
  //       break;
  //     case "ArrowRight":
  //       movieRight();
  //       console.log("오른쪽 눌렀다.");
  //       break;
  //     case "ArrowDown":
  //       movieDown();
  //       console.log("아래버튼 눌렀다.");
  //       break;
  //     case "ArrowUp":
  //       movieRotate();
  //       console.log("회전버튼 눌렀다.");
  //       break;
  //   }
  // });
});
