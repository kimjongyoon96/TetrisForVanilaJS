import { gameBoardCells } from "./Common/index.js";
export function shiftDownLines(startRow) {
  for (let y = startRow; y > 0; y--) {
    for (let x = 0; x < 10; x++) {
      const cellIndex = y * 10 + x;
      const aboveCellIndex = (y - 1) * 10 + x;
      console.log("check3");
      console.log(aboveCellIndex);
      if (gameBoardCells[aboveCellIndex].classList.contains("occupied")) {
        gameBoardCells[cellIndex].classList.add(
          "occupied",
          "-block",
          "-block-90"
        );
        gameBoardCells[aboveCellIndex].classList.remove("occupied");
      }
    }
  }
}
