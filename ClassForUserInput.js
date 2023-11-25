/* user의 input을 처리해주는 로직 */
import { currentTetrimino } from "../TetriminoCurrentPosition.js";
import { updateGameBoard } from "../UpdateGameBoard.js";
import TetriminoGenerator from "../random.js";

class UserInputHandler {
  constructor(gameBoardCells) {
    this.gameBoardCells = gameBoardCells;
    this.tetriminoGenerator = new TetriminoGenerator();
    this.addKeyboardListeners();
  }

  addKeyboardListeners() {
    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          this.moveLeft();
          break;
        case "ArrowRight":
          this.moveRight();
          break;
        case "ArrowDown":
          this.moveDown();
          break;
        case "ArrowUp":
          this.rotate();
          break;
      }
    });
  }

  moveDown() {
    if (currentTetrimino.position.y < 19) {
      currentTetrimino.position.y += 1;
      updateGameBoard(this.gameBoardCells);
    }
  }

  moveLeft() {
    if (currentTetrimino.position.x > 0) {
      currentTetrimino.position.x -= 1;
      updateGameBoard(this.updateGameBoard);
    }
  }

  moveRight() {
    if (currentTetrimino.position.x < 7) {
      currentTetrimino.position.x += 1;
      updateGameBoard(this.updateGameBoard);
    }
  }

  rotate() {
    currentTetrimino.rotation = (currentTetrimino.rotation + 90) % 360;
    console.log(currentTetrimino.rotation); // 회전방향 즉 90도,180도,270도..
    console.log(currentTetrimino.position);
    let rotatedType = currentTetrimino.type + currentTetrimino.rotation;
    if (currentTetrimino.rotation === 0) {
      currentTetrimino.rotation = 0;
      rotatedType = currentTetrimino.type;
      console.log("cultureshock");
    }
    currentTetrimino.shape = this.tetriminoGenerator.tetriminos[rotatedType];
    updateGameBoard(this.updateGameBoard);
  }
}

export default UserInputHandler;
