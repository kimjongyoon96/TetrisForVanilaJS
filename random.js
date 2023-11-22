/* 테트리미노 랜덤으로 만들어주는 class 함수*/
class TetriminoGenerator {
  constructor() {
    this.tetriminos = {
      I: [[1, 1, 1, 1]],
      J: [
        [1, 0, 0],
        [1, 1, 1],
      ],
      L: [
        [0, 0, 1],
        [1, 1, 1],
      ],
      O: [
        [1, 1],
        [1, 1],
      ],
      S: [
        [0, 1, 1],
        [1, 1, 0],
      ],
      T: [
        [0, 1, 0],
        [1, 1, 1],
      ],
      Z: [
        [1, 1, 0],
        [0, 1, 1],
      ],
    };
  }

  getRandomTetrimino() {
    const keys = Object.keys(this.tetriminos);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return {
      shape: this.tetriminos[randomKey], // 테트리미노의 모양
      type: randomKey, // 테트리미노의 타입
    };
  }
}

// 클래스를 내보내기
export default TetriminoGenerator;
