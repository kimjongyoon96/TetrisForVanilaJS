export function drawTetrimino(gameBoardCells, tetrimino, position, type) {
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
