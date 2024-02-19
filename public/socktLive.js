export function socketChath() {
  const liveChat = document.getElementById("liveChat");

  const ws = new WebSocket("ws://localhost:8080");

  ws.onopen = function () {
    console.log("서버에 연결되었습니다.");
    ws.send("클라이언트에서 서버로 메시지를 보냅니다.");
  };

  ws.onmessage = function (event) {
    console.log("서버로부터 받은 메시지:", event.data);
  };
}
