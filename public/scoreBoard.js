let score = 0; // 초기 점수

export function updateScore(rowsToRemove) {
  // 한 열당 10점씩 증가
  score += rowsToRemove.length * 10;

  // HTML 요소에 점수 업데이트
  const scoreElement = document.getElementById("score");
  if (scoreElement) {
    scoreElement.textContent = score;
  }
}
