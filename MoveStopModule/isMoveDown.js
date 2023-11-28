import { currentTetrimino } from "../TetriminoCurrentPosition";

export function isMoveDownStop(currentTetrimino) {
  if (currentTetrimino.type === "I") {
    if (currentTetrimino.rotation === 0 || currentTetrimino.rotation === 180) {
      currentTetrimino.height = 4;
      return currentTetrimino.position.y < 18;
    } else if (
      currentTetrimino.rotation === 90 ||
      currentTetrimino.rotation === 270
    ) {
      currentTetrimino.height = 1;
      return currentTetrimino.position.y < 19;
    }
  }
  if (currentTetrimino.type === "J") {
    if (currentTetrimino.rotation === 0 || currentTetrimino.rotation === 180) {
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
    if (currentTetrimino.rotation === 0 || currentTetrimino.rotation === 180) {
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
    if (currentTetrimino.rotation === 0 || currentTetrimino.rotation === 180) {
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
    if (currentTetrimino.rotation === 0 || currentTetrimino.rotation === 180) {
      currentTetrimino.height = 3;
      return currentTetrimino.position.y < 17;
    } else if (
      currentTetrimino.rotation === 90 ||
      currentTetrimino.rotation === 270
    ) {
      currentTetrimino.height = 2;
      return currentTetrimino.position.y < 18;
    }
  }
  if (currentTetrimino.type === "Z") {
    if (currentTetrimino.rotation === 0 || currentTetrimino.rotation === 180) {
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
