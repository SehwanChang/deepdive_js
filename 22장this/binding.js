// function Circle(radius) {
//   // this는 생성자 함수가 생성할 인스턴스 가리킴
//   this.radius = radius;
// }

// Circle.prototype.getDiameter = function () {
//     //생성자 함수가 생성할 인스턴스 가리킴
//   return 2 * this.radius;
// };

// //생성자 함수 : new와 같이 호출.
// const circle = new Circle(5);
// console.log(circle.getDiameter());

console.log(this);
function square(number) {
  //   console.log(this);
  return number * number;
}
square(2);
const person = {
  name: "Lee",
  getName() {
    // console.log(this);
    return this.name;
  },
};

// console.log(person.getName());

function Person(name) {
  this.name = name;
  console.log(this);
}

const me = new Person("chang");
