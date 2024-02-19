const express = require("express");
const app = express();
const port = 3002;
const htmlbox = require("./htmlbox");
app.use(express.static("public"));

app.get("/tetris", (req, res) => {
  res.send(htmlbox.htmlFunc(htmlbox.mySource));
});

// 서버를 시작합니다.
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
});

// if (request.url.startsWith("/tetris")) {
//   response.writeHead(200, { "Content-Type": "text/html" });
//   response.end(html.htmlFunc(htmlBox.mySource));
// }
