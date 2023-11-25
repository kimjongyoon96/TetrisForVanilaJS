/* 테트리미노의 형태,위치,타입,돌아가는것 모듈화*/

let currentTetrimino = {
  shape: [],
  position: [],
  type: [],
  width: [],
  rotation: 0,
};
console.log(currentTetrimino);
export { currentTetrimino };

// 사용자 정보처리를 위한 객체의 필요성
// 모듈 1 - TetrinoCurrentPosition.js
//   let currentTetrimino = {
//     shape: [],
//     position: [],
//     type: [],
//     rotation: 0,
//   };

/*  index.js에 있는 코드 모듈화 */
