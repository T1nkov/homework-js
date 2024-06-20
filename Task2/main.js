// Напишите функцию, которая принимает строку и возвращает количество гласных в этой
// строке.

const vowels = "aoeui";

const str = "dima";

const countVowels = () => str.split("").filter((el) => vowels.includes(el)).length;

console.log(countVowels());
