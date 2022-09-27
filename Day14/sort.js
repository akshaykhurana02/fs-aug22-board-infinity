// sort

let numbers = [6, 4, 8];
let counter = 1;

function sortFunction(a, b) {
  return a - b;
}

// console.log(sortFunction(4, 2)); // 2
// console.log(sortFunction(1, 5)); // -4

// For Ascending Order
numbers.sort(function (a, b) {
  console.log(` ${counter} -> ${a - b}`);
  counter++;
  return a - b;
});

// For Descending Order
// numbers.sort(function (a, b) {
//   console.log(b - a);
//   return b - a;
// });

console.log(numbers);
