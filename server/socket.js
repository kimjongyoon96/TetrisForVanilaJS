const webSocket = require("ws");
function socketChath() {
  const wss = new webSocket.Server({ port: 8080 });

  wss.on("connection", function connection(ws) {
    console.log("클라이언트가 연결되었습니다.");

    ws.on("message", function incoming(message) {
      console.log("받은 메시지:", message);
    });

    ws.send("서버에서 클라이언트로 메시지를 보냅니다.");
  });
}

module.exports = { socketChath };
