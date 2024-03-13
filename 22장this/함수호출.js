const foo = function () {
  console.dir(this);
};

//1. 일반 함수 호출 foo 함수 내부의 this: 전역  객체 window
foo();

//2. 메서드 호출
//foo 함수를 프로퍼티 값으로 할당하여 호출
// foo 함수 내부의 this: 메서드 호출한 객체 obj
const obj = { foo };
obj.foo();

//3. 생성자 함수 호출
//foo 함수를 new 연산자와 함께 생성자 함수로 호출
//foo 함수 내부의 this : 생성자 함수가 생성한 인스턴스
new foo();

//4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출
//foo 함수 내부의 this :인수에 의해 결정
const bar = { name: "bar" };
foo.call(bar); //bar
foo.apply(bar);
foo.bind(bar)();
