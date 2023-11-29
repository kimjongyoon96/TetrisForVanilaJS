export function showGameOverPopup() {
  // 게임 오버 팝업 표시
  const gameOverPopup = document.getElementById("gameOverPopup");
  gameOverPopup.style.display = "block";

  // "예" 버튼 클릭 이벤트 처리
  const restartButton = document.getElementById("restartButton");
  restartButton.onclick = function () {
    // 게임을 다시 시작하는 로직
    console.log("게임을 다시 시작합니다.");
    gameOverPopup.style.display = "none"; // 팝업 숨기기
    // 여기에 게임을 다시 시작하는 코드를 넣습니다.
  };

  // "아니오" 버튼 클릭 이벤트 처리
  const cancelButton = document.getElementById("cancelButton");
  cancelButton.onclick = function () {
    console.log("게임을 종료합니다.");
    gameOverPopup.style.display = "none"; // 팝업 숨기기
    // 필요한 경우 게임 종료 관련 추가 처리를 할 수 있습니다.
  };
}
