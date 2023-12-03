// import { gameBoardCells } from "./Common/index.js";
// // export function shiftDownLines(startRow) {
// //   for (let y = startRow; y > 0; y--) {
// //     // 현재위치 19, 19보다 크면, 19부터 for문
// //     for (let x = 0; x < 10; x++) {
// //       const cellIndex = y * 10 + x; // 즉 19X10+0 => 190부터..
// //       const aboveCellIndex = (y - 1) * 10 + x; //180부터..
// //       console.log("check3");
// //       console.log(startRow); //19
// //       console.log(y); //19
// //       console.log(x); //0

// //       console.log(gameBoardCells[cellIndex]);
// //       console.log(gameBoardCells[aboveCellIndex]);
// //       if (
// //         gameBoardCells[aboveCellIndex].classList.contains("occupied") &&
// //         gameBoardCells[aboveCellIndex].classList.contains("-block-90")
// //       ) {
// //         // gameBoardCells[cellIndex].classList.add(
// //         //   "occupied",
// //         //   "-block",
// //         //   "-block-90"
// //         // );
// //       }
// //       console.log("여기되면 정상인데진짜");
// //       gameBoardCells[aboveCellIndex].classList.remove("occupied");
// //       gameBoardCells[aboveCellIndex].classList.remove("-block");
// //       gameBoardCells[aboveCellIndex].classList.remove("-block-90");
// //       gameBoardCells[aboveCellIndex].classList.remove(
// //         "I-block",
// //         "J-block",
// //         "L-block",
// //         "O-block",
// //         "S-block",
// //         "T-block",
// //         "Z-block"
// //       );
// //       gameBoardCells[aboveCellIndex].classList.remove(
// //         "I-block-90",
// //         "J-block-90",
// //         "L-block-90",
// //         "O-block-90",
// //         "S-block-90",
// //         "T-block-90",
// //         "Z-block-90"
// //       );
// //     }
// //     console.log("여기되면 정상인데진짜222");
// //   }
// // }
// export function shiftDownLines(startRow) {
//   // startRow가 0 이하면 처리할 행이 없으므로 함수를 종료합니다.
//   if (startRow <= 0) return;
//   const cellIndex = startRow * 10;
//   const aboveCellIndex = (startRow - 1) * 10;

//   let above = []; // 위에 테트리미노의 classList 배열
//   console.log(above);
//   console.log(Array.isArray(above)); // true, 즉 배열이 맞다.

//   for (let x = 0; x < 10; x++) {
//     const currentCellIndex = cellIndex + x;
//     const currentAboveCellIndex = aboveCellIndex + x;
//     console.log(gameBoardCells[currentAboveCellIndex]); // 위에 테트리미노 class 값
//     above.push([...gameBoardCells[currentAboveCellIndex].classList]);
//   }
//   for (let x = 0; x < 10; x++) {
//     const cellClasses = above[x];
//     console.log(cellClasses);
//   }

//   // if (cellClasses.includes("occupied") && cellClasses.includes("-block-90")) {
//   //   cellClasses.forEach((className) => {
//   //     gameBoardCells[currentCellIndex].classList.add(className);
//   //   });
//   //   console.log("여기 추가 되었는가?");
//   // }

//   // if (
//   //   gameBoardCells[currentAboveCellIndex].classList.contains("occupied") &&
//   //   gameBoardCells[currentAboveCellIndex].classList.contains("-block-90")
//   // ) {
//   //   //   gameBoardCells[currentCellIndex].classList.add(
//   //   //     "occupied",
//   //   //     "-block",
//   //   //     "-block-90"
//   //   //   );
//   // }
//   // gameBoardCells[currentAboveCellIndex].classList.remove("occupied");
//   // gameBoardCells[currentAboveCellIndex].classList.remove("-block");
//   // gameBoardCells[currentAboveCellIndex].classList.remove("-block-90");
//   // gameBoardCells[currentAboveCellIndex].classList.remove(
//   //   "I-block",
//   //   "J-block",
//   //   "L-block",
//   //   "O-block",
//   //   "S-block",
//   //   "T-block",
//   //   "Z-block"
//   // );
//   // gameBoardCells[currentAboveCellIndex].classList.remove(
//   //   "I-block-90",
//   //   "J-block-90",
//   //   "L-block-90",
//   //   "O-block-90",
//   //   "S-block-90",
//   //   "T-block-90",
//   //   "Z-block-90"
//   // );
// }

// * 기본적으로 위에 줄의 클래스를 복사하고, 현재 줄에 클래스를 붙여놓고, 다시 위에줄의 클래스를 없애버린다 * //
// * 그러나, add와 remove 메소드의 본질적은 차이로 인하여, 다른방법을 고려해야 한다. *//
// * 1. 개별 클래스 하나하나 제거/ 2. 전체 클래스 제거 /3. 특정 패턴의 클래스만 제거 * //
// * 내 바로 위에 있는 classList의 값을 알아냈으니, 이를 토대로 빈 배열에 넣어놨다 * //
