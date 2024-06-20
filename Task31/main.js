// . Напишите функцию, которая принимает массив чисел и возвращает минимальное
// значение.

const arr = [1, 2, 3, 4, 5, 6, 100];

let minNum = arr;

const returnedNum = () =>
  arr.forEach((el, index) => (el < minNum ? (minNum = el) : minNum));

returnedNum();
console.log(minNum);
