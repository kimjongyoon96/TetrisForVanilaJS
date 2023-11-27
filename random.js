/* 테트리미노 랜덤으로 만들어주는 class 함수*/
class TetriminoGenerator {
  constructor() {
    this.tetriminos = {
      I: { shape: [[1], [1], [1], [1]], width: 1, height: 4 },
      I90: { shape: [[1, 1, 1, 1]], width: 4, height: 1 }, // 2차원 배열로 수정
      I180: { shape: [[1], [1], [1], [1]], width: 1, heigh: 4 },
      I270: { shape: [[1, 1, 1, 1]], width: 4, height: 1 }, // 2차원 배열로 수정
      J: {
        shape: [
          [1, 0, 0],
          [1, 1, 1],
        ],
        width: 3,
        height: 2,
      },
      J90: {
        shape: [
          [1, 1],
          [1, 0],
          [1, 0],
        ],
        width: 2,
        height: 3,
      },
      J180: {
        shape: [
          [1, 1, 1],
          [0, 0, 1],
        ],
        width: 3,
        height: 2,
      },
      J270: {
        shape: [
          [0, 1],
          [0, 1],
          [1, 1],
        ],
        width: 2,
        height: 3,
      },
      L: {
        shape: [
          [0, 0, 1],
          [1, 1, 1],
        ],
        width: 3,
        height: 2,
      },
      L90: {
        shape: [
          [1, 0],
          [1, 0],
          [1, 1],
        ],
        width: 2,
        height: 3,
      },
      L180: {
        shape: [
          [1, 1, 1],
          [1, 0, 0],
        ],
        width: 3,
        height: 2,
      },
      L270: {
        shape: [
          [1, 1],
          [0, 1],
          [0, 1],
        ],
        width: 2,
        height: 3,
      },
      O: {
        shape: [
          [1, 1],
          [1, 1],
        ],
        width: 2,
        height: 2,
      },
      O90: {
        shape: [
          [1, 1],
          [1, 1],
        ],
        width: 2,
        height: 2,
      },
      O180: {
        shape: [
          [1, 1],
          [1, 1],
        ],
        width: 2,
        height: 2,
      },
      O270: {
        shape: [
          [1, 1],
          [1, 1],
        ],
        width: 2,
        height: 2,
      },
      S: {
        shape: [
          [0, 1, 1],
          [1, 1, 0],
        ],
        width: 3,
        height: 2,
      },
      S90: {
        shape: [
          [1, 0],
          [1, 1],
          [0, 1],
        ],
        width: 2,
        height: 3,
      },
      S180: {
        shape: [
          [0, 1, 1],
          [1, 1, 0],
        ],
        width: 3,
        height: 2,
      },
      S270: {
        shape: [
          [1, 0],
          [1, 1],
          [0, 1],
        ],
        width: 2,
        height: 3,
      },
      T: {
        shape: [
          [1, 1, 1],
          [0, 1, 0],
        ],
        width: 3,
        height: 2,
      },
      T90: {
        shape: [
          [1, 0],
          [1, 1],
          [1, 0],
        ],
        width: 2,
        height: 3,
      },
      T180: {
        shape: [
          [1, 1, 1],
          [0, 1, 0],
        ],
        width: 3,
        height: 2,
      },
      T270: {
        shape: [
          [0, 1],
          [1, 1],
          [0, 1],
        ],
        width: 2,
        height: 3,
      },
      Z: {
        shape: [
          [1, 1, 0],
          [0, 1, 1],
        ],
        width: 3,
        height: 2,
      },
      Z90: {
        shape: [
          [0, 1],
          [1, 1],
          [1, 0],
        ],
        width: 2,
        height: 3,
      },
      Z180: {
        shape: [
          [1, 1, 0],
          [0, 1, 1],
        ],
        width: 3,
        height: 2,
      },
      Z270: {
        shape: [
          [0, 1],
          [1, 1],
          [1, 0],
        ],
        width: 2,
        height: 3,
      },
    };
  }
  getRandomTetrimino() {
    const keys = Object.keys(this.tetriminos);
    const filteredKeys = keys.filter((key) => !key.match(/\d+$/)); // 숫자로 끝나는 키를 제외
    const randomKey =
      filteredKeys[Math.floor(Math.random() * filteredKeys.length)];

    const selectedTetrimino = this.tetriminos[randomKey]; // 선택된 테트리미노 객체
    console.log(selectedTetrimino);
    console.log(selectedTetrimino.shape);
    console.log(selectedTetrimino.width);
    console.log(selectedTetrimino.rotation);
    console.log(selectedTetrimino.type);
    console.log(selectedTetrimino.position);

    return {
      shape: selectedTetrimino.shape, // 테트리미노의 모양
      type: randomKey, // 테트리미노의 타입
      rotation: 0, // 초기 회전 상태 (0도)
      width: selectedTetrimino.width, // 테트리미노의 너비
    };
  }
}
// 클래스를 내보내기
export default TetriminoGenerator;

// 1. TetriminoGenerator 클래스를 생성한다. 그리고, 이를 적용한다.
// 2. constructor() 클래스 자동 생성 함수, 이는 클래스를 호출할때 쓰인다.
// 3. this.tetriminos => tetriminos의 데이터를 정의한다..
// 4.  getRandomTetrimino() => 메소드이며, 무작위로 tetriminos에 정의한 데이터들을 추출한다.
// 5. Object.keys(this.tetriminos)를 사용하여 tetriminos 객체의 모든 키를 배열로 가져온다.
//filter 메서드와 정규 표현식을 사용하여, 숫자로 끝나는 키(회전된 테트리미노를 나타내는 키)를 제외한 나머지 키만 filteredKeys 배열에 저장한다.
// 6. Math.random() 함수와 Math.floor() 함수를 사용하여 filteredKeys 배열에서 무작위로 하나의 키를 선택한다.
// 7. 선택된 키(randomKey)에 해당하는 테트리미노의 모양(shape), 타입(type), 그리고 초기 회전 상태(rotation)를 객체로 묶어 반환합니다.
