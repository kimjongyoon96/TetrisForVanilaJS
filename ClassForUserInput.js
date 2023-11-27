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
      console.log(currentTetrimino.position);
    }
  }

  moveLeft() {
    if (currentTetrimino.position.x > 0) {
      currentTetrimino.position.x -= 1;
      updateGameBoard(this.gameBoardCells);
    }
  }
  is_possible() {
    if (currentTetrimino.type === "I") {
      if (
        currentTetrimino.rotation === 0 ||
        currentTetrimino.rotation === 180
      ) {
        currentTetrimino.width = 1;
        return currentTetrimino.position.x < 9;
      } else if (
        currentTetrimino.rotation === 90 ||
        currentTetrimino.rotation === 270
      ) {
        currentTetrimino.width = 4;
        return currentTetrimino.position.x < 6;
      }
    }
    if (currentTetrimino.type === "J") {
      if (
        currentTetrimino.rotation === 0 ||
        currentTetrimino.rotation === 180
      ) {
        currentTetrimino.width = 3;
        return currentTetrimino.position.x < 7;
      } else if (
        currentTetrimino.rotation === 90 ||
        currentTetrimino.rotation === 270
      ) {
        currentTetrimino.width = 2;
        return currentTetrimino.position.x < 8;
      }
    }
    if (currentTetrimino.type === "L") {
      if (
        currentTetrimino.rotation === 0 ||
        currentTetrimino.rotation === 180
      ) {
        currentTetrimino.width = 3;
        return currentTetrimino.position.x < 7;
      } else if (
        currentTetrimino.rotation === 90 ||
        currentTetrimino.rotation === 270
      ) {
        currentTetrimino.width = 2;
        return currentTetrimino.position.x < 8;
      }
    }
    if (currentTetrimino.type === "O") {
      currentTetrimino.width = 2;
      return currentTetrimino.position.x < 8;
    }
    if (currentTetrimino.type === "S") {
      if (
        currentTetrimino.rotation === 0 ||
        currentTetrimino.rotation === 180
      ) {
        currentTetrimino.width = 3;
        return currentTetrimino.position.x < 7;
      } else if (
        currentTetrimino.rotation === 90 ||
        currentTetrimino.rotation === 270
      ) {
        currentTetrimino.width = 2;
        return currentTetrimino.position.x < 8;
      }
    }
    if (currentTetrimino.type === "T") {
      if (
        currentTetrimino.rotation === 0 ||
        currentTetrimino.rotation === 180
      ) {
        currentTetrimino.width = 3;
        return currentTetrimino.position.x < 7;
      } else if (
        currentTetrimino.rotation === 90 ||
        currentTetrimino.rotation === 270
      ) {
        currentTetrimino.width = 2;
        return currentTetrimino.position.x < 8;
      }
    }
    if (currentTetrimino.type === "Z") {
      if (
        currentTetrimino.rotation === 0 ||
        currentTetrimino.rotation === 180
      ) {
        currentTetrimino.width = 3;
        return currentTetrimino.position.x < 7;
      } else if (
        currentTetrimino.rotation === 90 ||
        currentTetrimino.rotation === 270
      ) {
        currentTetrimino.width = 2;
        return currentTetrimino.position.x < 8;
      }
    }
    return false;
  }
  moveRight() {
    this.is_possible();
    if (this.is_possible()) {
      // 이동 가능한 경우
      currentTetrimino.position.x += 1; // x 위치를 1 증가
      updateGameBoard(this.gameBoardCells); // 게임 보드 업데이트
      console.log(currentTetrimino); // 콘솔에 현재 테트리미노 정보 로깅
    }

    // if (currentTetrimino.position.x < 7) {
    //   currentTetrimino.position.x += 1;
    //   updateGameBoard(this.gameBoardCells);
    //   console.log(currentTetrimino); // {x:5,y:1, => x:6,y:1..}
    //   // }
    //   // if (is_possible()) {
    // }
  }
  rotate() {
    currentTetrimino.rotation = (currentTetrimino.rotation + 90) % 360; // 90 180 270 0
    let rotatedType = currentTetrimino.type + currentTetrimino.rotation; // I90 I180 I270 I0
    let rotatedWidth = currentTetrimino.width;
    if (currentTetrimino.rotation === 0) {
      currentTetrimino.rotation = 0;
      rotatedType = currentTetrimino.type; // L, 180,270,90은 출력안됨 정상작동
    }
    console.log(this.tetriminoGenerator.tetriminos[rotatedType].shape);
    console.log(rotatedWidth);
    currentTetrimino.shape =
      this.tetriminoGenerator.tetriminos[rotatedType].shape; //shape 만 출력되는것이 아닌, width:2도 같이 나오는데,
    console.log(currentTetrimino);
    updateGameBoard(this.gameBoardCells);
  }
}

export default UserInputHandler;
