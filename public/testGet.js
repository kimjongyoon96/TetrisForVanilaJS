const testThing = document.getElementById("scoreBoard");

// 클릭 이벤트 리스너를 버튼에 추가
testThing.addEventListener("click", function () {
  fetch("http://localhost:3002/api/test")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`테스트 클라이언트쪽 에러났습니다.`);
    })
    .then((data) => {
      console.log(data, "파싱한 데이터입니다.");
    })
    .catch((error) => {
      console.error(error, "여기 서버쪽 에러가 났습니다.");
    });
});
