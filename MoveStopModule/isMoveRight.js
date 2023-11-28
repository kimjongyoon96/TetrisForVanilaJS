import { currentTetrimino } from "../TetriminoCurrentPosition";
import { updateGameBoard } from "../UpdateGameBoard";
export function is_possible(currentTetrimino) {
  if (currentTetrimino.type === "I") {
    if (currentTetrimino.rotation === 0 || currentTetrimino.rotation === 180) {
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
    if (currentTetrimino.rotation === 0 || currentTetrimino.rotation === 180) {
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
    if (currentTetrimino.rotation === 0 || currentTetrimino.rotation === 180) {
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
    if (currentTetrimino.rotation === 0 || currentTetrimino.rotation === 180) {
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
    if (currentTetrimino.rotation === 0 || currentTetrimino.rotation === 180) {
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
    if (currentTetrimino.rotation === 0 || currentTetrimino.rotation === 180) {
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
