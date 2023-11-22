export function drawTetrimino(gameBoard, tetrimino, position) {
  tetrimino.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        const blockElement = document.createElement("div");
        blockElement.classList.add("block");
        blockElement.classList.add(tetrimino.type + "-block"); // 테트리미노 타입에 따른 클래스 추가

        // 블록의 위치를 계산하고 적용
        blockElement.style.top = (position.y + y) * 20 + "px";
        blockElement.style.left = (position.x + x) * 20 + "px";

        gameBoard.appendChild(blockElement);
      }
    });
  });
}
