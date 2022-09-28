/*
Doubts.js-Day-3
    Date - 28 Sept 2022

    Spread Operator v/s Rest Operator

    Materials -

    https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/
    https://www.geeksforgeeks.org/what-is-the-rest-parameter-and-spread-operator-in-javascript/

*/

// Rest Operator

function sum(firstNumber, secondNumber, ...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(`Sum is ${sum}`);
}

sum(2, 3, 4, 5, 6, 7, 8);

// Spread Operator

let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];
let array3 = ["First Array", ...array1, "Second Array", ...array2];

console.log(array3);
