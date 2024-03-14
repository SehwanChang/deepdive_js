// /* 콜백 함수 사용 */
// const add5 = (number, callback) => {
//   setTimeout(() => callback(number + 5), 1000);
// };
// const add10 = (number, callback) => {
//   setTimeout(() => callback(number + 10), 1000);
// };
// const add15 = (number, callback) => {
//   setTimeout(() => callback(number + 15), 1000);
// };
// const log = (number) => {
//   console.log(number);
// };
// add5(0, (number) => add10(number, (number) => add15(number, log)));
/* promise 사용 */

const add1 = (number) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(number + 5);
    }, 1000)
  );
};

const add2 = (number) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(number + 10);
    }, 1000)
  );
};
const add3 = (number) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(number + 15);
    }, 1000)
  );
};
const log2 = (number) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(number);
    }, 1000)
  );
};

add1(0)
  .then((number) => add2(number))
  .then((number) => add3(number))
  .then((number) => log2(number));
