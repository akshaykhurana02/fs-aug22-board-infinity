// Map

let initial = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // n = 10
let tripleArray = initial.map((a) => {
  return a * 3;
});

console.log(initial, tripleArray);

// Filter

// I want a resultant array where all values are less then equal to 4

let newArray = initial.filter((num) => num <= 4);
console.log(newArray);

// Reduce

const numbers = [1, 2, 3, 4];

const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);

console.log(sum);

/*

    1st iteration
    result = 0, item = 1
    result = result + item
    result = 0 + 1
    result = 1

    2nd iteration
    result = 1, item = 2
    result = 1 + 2 = 3

    3rd iteration
    result = 3 + 3 = 6

    4th iteration
    result = 6 + 4
    result = 10;
*/

/*

    In above example,

    result is the accumulator
    item -> current occurence
    0 -> initial value of the accumulator

*/