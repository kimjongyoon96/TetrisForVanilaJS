import { checkCompleteLines } from "./checkCompleteLines.js";
import { gameBoardCells } from "./Common/index.js";
// import { addNewCell } from "./addNewCell.js";
const gameBoard = document.getElementById("gameBoard");
export function removecompleteLines(rowsToRemove) {
  let linesRemoved = false;
  rowsToRemove.forEach((y) => {
    // 완전히 채워진 줄의 인덱스에 대해 반복
    for (let x = 0; x < 10; x++) {
      // 해당 줄의 모든 셀을 순회
      const cellIndex = y * 10 + x; // 현재 셀의 1차원 배열 인덱스 계산
      console.log("check2");
      console.log(cellIndex); //190 -199까지, 맨바닥열
      console.log(gameBoardCells[cellIndex].classList);
      gameBoardCells[cellIndex].remove(); // 가득찬 곳의 div 자체를 없애버린다.
      console.log(gameBoardCells[cellIndex]);
      linesRemoved = true;
      //   Todo 클래스가 아닌 div 추가
      //   Todo 점수 추가
      //   gameBoardCells[cellIndex].classList.remove("occupied"); // 'occupied' 클래스 제거
      //   gameBoardCells[cellIndex].classList.remove("-block");
      //   gameBoardCells[cellIndex].classList.remove("-block-90");
      //   gameBoardCells[cellIndex].classList.remove(
      //     "I-block",
      //     "J-block",
      //     "L-block",
      //     "O-block",
      //     "S-block",
      //     "T-block",
      //     "Z-block"
      //   );
      //   gameBoardCells[cellIndex].classList.remove(
      //     "I-block-90",
      //     "J-block-90",
      //     "L-block-90",
      //     "O-block-90",
      //     "S-block-90",
      //     "T-block-90",
      //     "Z-block-90"
      //   );

      console.log("isOucupiedRemove?");
    }
  });
  //   addNewCell(gameBoard);
  console.log("추가cell 실행됨?");
  return true;
}

// ['cell', 'O-block', 'O-block-90', 'occupied', '-block-90', value: 'cell O-block O-block-90 occupied -block-90']

// * class.add 와 class.remove 는 다르게 작동한다.. *//
// * add 는 type 에 맞는 모든 클래스 요소가 자동으로 추가된다 *//
// * 그러나, remove 메소드는 일일이 모든 클래스를 지정해줘야한다. *//
