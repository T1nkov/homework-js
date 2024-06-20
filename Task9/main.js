// 9. Напишите функцию, которая принимает число и возвращает true, если число является
// простым, и false в противном случае.

const num = 7;

let count = 0;
const divisionNumber = () => {
  for (let index = 2; index < num; index++) {
    if (num % index == 0) count++;
  }
  console.log(count == 0);
};

divisionNumber();
