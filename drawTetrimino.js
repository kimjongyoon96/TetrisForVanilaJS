function drawTetrimino(gameBoardCells, tetrimino, position, type) {
  console.log(tetrimino);
  const rows = tetrimino.length; // 테트리미노 배열의 행 수
  const cols = tetrimino[0].length; // 테트리미노 배열의 열 수

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (tetrimino[y][x] === 1) {
        const cellIndex = (position.y + y) * 10 + (position.x + x);
        const cell = gameBoardCells[cellIndex];
        if (cell) {
          cell.classList.add("tetrimino", type + "-block"); // 타입에 맞는 클래스 추가
        }
      }
    }
  }
}

export { drawTetrimino };

// 1. drawTetrimono는 4개의 매개변수를 받는다.
// 1-1 gameBoardcells -> gameboard 즉, 테트리스 판때기
// 1-2 tetrimino -> 테트리미노의 모양을 나타는 것
// 1-3 position -> 테트리미노 게임보드판 위에 표시할 위치
// 1-4 type -> 테트리미노의 종류 (I,J..)
// 2-1 rows에 테트리미노의 배열의 행 수 를 저장한다.
// 2-2 cols에 테트리미노의 배열의 열 수 를 저장한다.
// 3-1 if(tetrimino[y][x] ===1) => 테트리미노가 존재하면
// 3-2 위치를 계산한다. y*2의 이유는 행이 10, 열이 20이다. 즉 20을 뜻한다.
// 3-3 cell에 특정 보드에 맞는 블록을 넣는다.
// 3-4 만일 cell이 존재한다면 즉, cell이 특정위치에 맞다면 조건에 맞는 클래스를 추가한다.
// 3-5 여기서 클래스란, random.js에 있는 tetrimino에 있는 type 중에,
// -block(특정 블록을 추가한다 -j,n....)
