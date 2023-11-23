/* 테트리미노 랜덤으로 만들어주는 class 함수*/
class TetriminoGenerator {
  constructor() {
    this.tetriminos = {
      I: [[1], [1], [1], [1]],
      I90: [1, 1, 1, 1],
      I180: [[1], [1], [1], [1]],
      I270: [[1, 1, 1, 1]],
      J: [
        [1, 0, 0],
        [1, 1, 1],
      ],
      J90: [
        [1, 1],
        [1, 0],
        [1, 0],
      ],
      J180: [
        [1, 1, 1],
        [0, 0, 1],
      ],
      J270: [
        [0, 1],
        [0, 1],
        [1, 1],
      ],
      L: [
        [0, 0, 1],
        [1, 1, 1],
      ],
      L90: [
        [1, 0],
        [1, 0],
        [1, 1],
      ],
      L180: [
        [1, 1, 1],
        [1, 0, 0],
      ],
      L270: [
        [1, 1],
        [0, 1],
        [0, 1],
      ],

      O: [
        [1, 1],
        [1, 1],
      ],
      O90: [
        [1, 1],
        [1, 1],
      ],
      O180: [
        [1, 1],
        [1, 1],
      ],
      O270: [
        [1, 1],
        [1, 1],
      ],

      S: [
        [0, 1, 1],
        [1, 1, 0],
      ],
      S90: [
        [1, 0],
        [1, 1],
        [0, 1],
      ],
      S180: [
        [0, 1, 1],
        [1, 1, 0],
      ],
      S270: [
        [1, 0],
        [1, 1],
        [0, 1],
      ],

      T: [
        [1, 1, 1],
        [0, 1, 0],
      ],
      T90: [
        [1, 0],
        [1, 1],
        [1, 0],
      ],
      T180: [
        [1, 1, 1],
        [0, 1, 0],
      ],
      T270: [
        [0, 1],
        [1, 1],
        [0, 1],
      ],

      Z: [
        [1, 1, 0],
        [0, 1, 1],
      ],

      Z90: [
        [0, 1],
        [1, 1],
        [1, 0],
      ],
      Z180: [
        [1, 1, 0],
        [0, 1, 1],
      ],
      Z270: [
        [0, 1],
        [1, 1],
        [1, 0],
      ],
    };
  }

  getRandomTetrimino() {
    const keys = Object.keys(this.tetriminos);
    const filteredKeys = keys.filter((key) => !key.match(/\d+$/)); // 숫자로 끝나는 키를 제외
    const randomKey =
      filteredKeys[Math.floor(Math.random() * filteredKeys.length)];
    return {
      shape: this.tetriminos[randomKey], // 테트리미노의 모양
      type: randomKey, // 테트리미노의 타입
      rotation: [], // 초기회전상태 임의로 기입
    };
  }
}

// 클래스를 내보내기
export default TetriminoGenerator;
