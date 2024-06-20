// Напишите функцию, которая принимает массив строк и возвращает строку, которая
// встречается чаще всего.

const str = ["aaa", "asdfasd", "asda", "aaa"];

const obj = {};

const res = () => {
  str.forEach((el) => {
    obj[el] = (obj[el] || 0) + 1;
  });
  return Math.max(...Object.values(obj));
};

console.log(res());
