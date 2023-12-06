/* user의 input을 처리해주는 로직 */
import { currentTetrimino } from "../TetriminoCurrentPosition.js";
import { updateGameBoard } from "./UpdateGameBoard.js";
import TetriminoGenerator from "../random.js";
import { drawTetrimino } from "./drawTetrimino.js";
import { gameBoardCells } from "./index.js";
import { checkCompleteLines } from "./checkCompleteLines.js";
import { removecompleteLines } from "./CheckRemoveLines.js";
import { updateScore } from "./scoreBoard.js";
import { gameOverModal } from "./ModalForGameOver.js";
const gameBoard = document.getElementById("gameBoard");

const tetriminoGenerator = new TetriminoGenerator();
class UserInputHandler {
  constructor(gameBoardCells) {
    this.gameBoardCells = gameBoardCells;
    this.isTetriminoFixed = false;
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

  // 모듈화 후보 1
  isMoveDownStop() {
    if (currentTetrimino.type === "I") {
      if (
        currentTetrimino.rotation === 0 ||
        currentTetrimino.rotation === 180
      ) {
        currentTetrimino.height = 4;
        return currentTetrimino.position.y < 16;
      } else if (
        currentTetrimino.rotation === 90 ||
        currentTetrimino.rotation === 270
      ) {
        currentTetrimino.height = 1;
        return currentTetrimino.position.y < 19;
      }
    }
    if (currentTetrimino.type === "J") {
      if (
        currentTetrimino.rotation === 0 ||
        currentTetrimino.rotation === 180
      ) {
        currentTetrimino.hegiht = 2;
        return currentTetrimino.position.y < 18;
      } else if (
        currentTetrimino.rotation === 90 ||
        currentTetrimino.rotation === 270
      ) {
        currentTetrimino.hegiht = 3;
        return currentTetrimino.position.y < 17;
      }
    }
    if (currentTetrimino.type === "L") {
      if (
        currentTetrimino.rotation === 0 ||
        currentTetrimino.rotation === 180
      ) {
        currentTetrimino.height = 2;
        return currentTetrimino.position.y < 18;
      } else if (
        currentTetrimino.rotation === 90 ||
        currentTetrimino.rotation === 270
      ) {
        currentTetrimino.height = 3;
        return currentTetrimino.position.y < 17;
      }
    }
    if (currentTetrimino.type === "O") {
      currentTetrimino.height = 2;
      return currentTetrimino.position.y < 18;
    }
    if (currentTetrimino.type === "S") {
      if (
        currentTetrimino.rotation === 0 ||
        currentTetrimino.rotation === 180
      ) {
        currentTetrimino.height = 2;
        return currentTetrimino.position.y < 18;
      } else if (
        currentTetrimino.rotation === 90 ||
        currentTetrimino.rotation === 270
      ) {
        currentTetrimino.height = 3;
        return currentTetrimino.position.y < 17;
      }
    }
    if (currentTetrimino.type === "T") {
      if (
        currentTetrimino.rotation === 0 ||
        currentTetrimino.rotation === 180
      ) {
        currentTetrimino.height = 2;
        return currentTetrimino.position.y < 18;
      } else if (
        currentTetrimino.rotation === 90 ||
        currentTetrimino.rotation === 270
      ) {
        currentTetrimino.height = 2;
        return currentTetrimino.position.y < 18;
      }
    }
    if (currentTetrimino.type === "Z") {
      if (
        currentTetrimino.rotation === 0 ||
        currentTetrimino.rotation === 180
      ) {
        currentTetrimino.height = 2;
        return currentTetrimino.position.y < 18;
      } else if (
        currentTetrimino.rotation === 90 ||
        currentTetrimino.rotation === 270
      ) {
        currentTetrimino.height = 3;
        return currentTetrimino.position.y < 17;
      }
    }
    return false;
  }

  fixCurrentTetrimino() {
    // 현재 테트리미노를 게임 보드에 고정하는 로직
    currentTetrimino.shape.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell === 1) {
          const cellIndex =
            (currentTetrimino.position.y + y) * 10 +
            (currentTetrimino.position.x + x);
          console.log("고정로직 잘 작동");
          if (gameBoardCells[cellIndex]) {
            gameBoardCells[cellIndex].classList.add("occupied", "-block-90");
          }
        }
      });
    });
  }

  checkCollision(newPosition, newShape) {
    for (let y = 0; y < newShape.length; y++) {
      for (let x = 0; x < newShape[y].length; x++) {
        if (newShape[y][x] === 1) {
          let targetX = newPosition.x + x;
          let targetY = newPosition.y + y;

          // 해당 위치의 셀이 'occupied' 클래스를 가지고 있는지 확인
          const cellIndex = targetY * 10 + targetX;
          if (
            gameBoardCells[cellIndex] &&
            gameBoardCells[cellIndex].classList.contains("occupied")
          ) {
            return true; // 충돌 발생
          }
          //   console.log(gameBoardCells[cellIndex]);
        }
      }
    }
    return false; // 충돌 없음
  }

  moveDown() {
    let newPosition = {
      x: currentTetrimino.position.x,
      y: currentTetrimino.position.y + 1,
    };

    if (!this.checkCollision(newPosition, currentTetrimino.shape)) {
      if (this.isMoveDownStop()) {
        currentTetrimino.position.y += 1;
        updateGameBoard(this.gameBoardCells);
      } else {
        // 바닥에 닿았을 경우의 처리
        this.fixCurrentTetrimino();
        this.createNewTetrimino();
        const rowsToRemove = checkCompleteLines();
        if (rowsToRemove.length > 0) {
          removecompleteLines(rowsToRemove);
          updateScore(rowsToRemove);
        }
        console.log(gameBoard);
        console.log(gameBoardCells);
        console.log("여기 작동하는겨머여");
      }
    } else {
      // 충돌이 발생했을 경우의 처리
      this.fixCurrentTetrimino();
      this.createNewTetrimino();
      const rowsToRemove = checkCompleteLines();
      if (rowsToRemove.length > 0) {
        removecompleteLines(rowsToRemove);
        updateScore(rowsToRemove);
      }
      console.log("checkGameOver");
      gameOverModal();
      console.log("모달이잘오는구나");
    }
  }

  createNewTetrimino() {
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
  }

  moveLeft() {
    if (currentTetrimino.position.x > 0) {
      currentTetrimino.position.x -= 1;
      updateGameBoard(this.gameBoardCells);
    }
  }
  // 모듈화 후보 2
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
