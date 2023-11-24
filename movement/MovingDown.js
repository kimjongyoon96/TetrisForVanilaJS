import { updateGameBoard } from "./UpdateGameBoard";
import { currentTetrimino } from "../TetriminoCurrentPosition";

export function movieDown() {
  if (currentTetrimino.position.y < 19) {
    currentTetrimino.position.y += 1;
    updateGameBoard();
  }
  console.log(currentTetrimino.position.y);
}
