const person = {
  name: "Lee",
  getName() {
    return this.name;
  },
};
console.log(person.getName());
// 메서드 : 프로퍼티에 바인딩된 함수 , 객체에 포함된 것이 아니라 독립적으로 존재하는 별도의 객체.

const anotherPerson = {
  name: "Kim",
};
anotherPerson.getName = person.getName;
const getName = person.getName;
console.log(getName());

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

const me = new Person("Lee");
console.log(me.getName()); // Lee
// getname호출한 객체 : me -> this: me를 가리킴.
