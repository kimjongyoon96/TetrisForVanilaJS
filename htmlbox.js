const html = {
  htmlFunc: function (data) {
    return ` <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>테트리스게임</title>
        <link rel="stylesheet" type="text/css" href="/index.css" />
      </head>
      <body>
      <div id="liveChat">
      <div class="chat-messages">
       
      </div>
      <input type="text" class="chat-input" placeholder="메시지를 입력하세요...">
    
    </div>

        <div id="clock"></div>
       
        <div id="tetris"> 
          <div id="gameBoard"></div>
          <div id="scoreBoard">
            <div>점수: <span id="score">0</span></div>
            <button id="startButton">게임 시작</button>
            <button id="stopButton">일시 정지</button>
          </div>
          <div id="pauseModal" class="modal">
            <div class="modal-content">
              <button id="resumeButton">게임 재개</button>
              <button id="restartButton">다시 시작</button>
            </div>
          </div>
          <div id="gameover" class="modal">
            <div class="modal-content">
            <button id="restartButton">GAME OVER</button>
            <button id="restartButton">다시 시작 하기</button>
    
            
          </div>
        </div>
    
        ${data}
      </body>
    </html>`;
  },
  mySource: `
   <script type="module" src="/index.js"></script>
   <script type="module" src="/checkCompleteLines.js"></script>
   <script type="module" src="/CheckRemoveLines.js"></script>
   <script type="module" src="/ClassForUserInput.js"></script>
   <script type="module" src="/Clock.js"></script>
   <script type="module" src="/drawTetrimino.js"></script>
   <script type="module" src="/GameBoard.js"></script>
   <script type="module" src="/ModalForGameOver.js"></script>
   <script type="module" src="/random.js"></script>
   <script type="module" src="/scoreBoard.js"></script>
   <script type="module" src="/TetriminoCurrentPosition.js"></script>
   <script type="module" src="/UpdateGameBoard.js"></script>
   <script type="module" src="/socktLive.js"></script>
  

  `,
};
module.exports = html;
