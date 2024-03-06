const webSocket = require("ws");

function socketChath() {
  const wss = new webSocket.Server({ port: 8080 });

  wss.on("connection", function connection(ws) {
    console.log("클라이언트가 연결되었습니다.");

    // 클라이언트에게 초기 메시지를 보냅니다.
    ws.send("서버에서 클라이언트로 메시지를 보냅니다.");

    ws.on("message", function incoming(message) {
      const messageStr = message.toString();
      console.log("여기는 서버 쪽 받은 메시지:", messageStr);

      // 받은 메시지를 모든 클라이언트에게 브로드캐스트합니다.
      // 여기서, 내가 쓴건지 아니면 다른놈인지 판단
      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === webSocket.OPEN) {
          client.send(messageStr);
        }
      });
    });
  });
}

module.exports = { socketChath };
