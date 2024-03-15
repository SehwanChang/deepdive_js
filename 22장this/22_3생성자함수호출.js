function Circle(raidus) {
  this.raidus = raidus;
  this.getDiameter = function () {
    return 2 * this.raidus;
  };
}
const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20
// 생성자 함수 : 객체(인스턴스)생성하는 함수.
// 일반함수와 동일한 방법으로 생성자 함수 정의 & new 연산자로 호출 -> 생성자 함수로 동작.
const circle3 = Circle(15);
// undefined (일반함수로 호출된 circle: 반환문 x => undefined 반환)
console.log(circle3); // undefined
console.log(radius); // 15 근데 왜 난 undefined가 나오지?
