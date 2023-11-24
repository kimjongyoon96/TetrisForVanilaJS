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

// 1. 테TetriminoGenerator 클래스를 생성한다. 그리고, 이를 적용한다.
// 2. constructor() 클래스 자동 생성 함수, 이는 클래스를 호출할때 쓰인다.
// 3. this.tetriminos => tetriminos의 데이터를 정의한다..
// 4.  getRandomTetrimino() => 메소드이며, 무작위로 tetriminos에 정의한 데이터들을 추출한다.
// 5. Object.keys(this.tetriminos)를 사용하여 tetriminos 객체의 모든 키를 배열로 가져온다.
//filter 메서드와 정규 표현식을 사용하여, 숫자로 끝나는 키(회전된 테트리미노를 나타내는 키)를 제외한 나머지 키만 filteredKeys 배열에 저장한다.
// 6. Math.random() 함수와 Math.floor() 함수를 사용하여 filteredKeys 배열에서 무작위로 하나의 키를 선택한다.
// 7. 선택된 키(randomKey)에 해당하는 테트리미노의 모양(shape), 타입(type), 그리고 초기 회전 상태(rotation)를 객체로 묶어 반환합니다.
