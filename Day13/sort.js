// sort

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

let numbers = [4, 5, 6, 100, 19, -25, 27, 31, 90, 0, 1, -1];

function sortFunction(a, b) {
  return a - b;
}

console.log(sortFunction(4, 2)); // 2
console.log(sortFunction(1, 5)); // -4

// For Ascending Order
numbers.sort(function (a, b) {
  return a - b;
});

// For Descending Order
numbers.sort(function (a, b) {
  return b - a;
});

console.log(numbers);
