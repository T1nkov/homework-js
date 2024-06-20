// Напишите функцию, которая принимает массив чисел и возвращает максимальное
// значение.

const arr = [1, 2, 3, 4, 5, 6, 100];

let maxNum = 0;

const returnedNum = () =>
  arr.forEach((el, index) => (el > maxNum ? (maxNum = el) : maxNum));

  returnedNum()
console.log(maxNum);
