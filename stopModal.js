// '일시 정지' 버튼 클릭 이벤트
document.getElementById("stopButton").addEventListener("click", function () {
  document.getElementById("pauseModal").style.display = "block"; // 모달 표시
});

// '게임 재개' 버튼 클릭 이벤트
document.getElementById("resumeButton").addEventListener("click", function () {
  document.getElementById("pauseModal").style.display = "none"; // 모달 숨김
  // 여기에 게임 재개 로직 추가
});

// '다시 시작' 버튼 클릭 이벤트
document.getElementById("restartButton").addEventListener("click", function () {
  document.getElementById("pauseModal").style.display = "none"; // 모달 숨김
  location.reload(); // 페이지 새로고침으로 게임 다시 시작
});
