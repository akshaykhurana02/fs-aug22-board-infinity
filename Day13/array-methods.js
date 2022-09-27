// Array

// join

const fruits = ["Banana", "Orange", "Apple"];
console.log(fruits.join()); // By default it will take comma as a separator
console.log(fruits.join(" "));

// pop
// It removes first element from stack
// or in other words
// It removes last element from array

let vegetables = ["Potato", "Tomato", "Ginger"];
console.log(vegetables);
let removedVeggie = vegetables.pop(); // Ginger
console.log(removedVeggie, typeof removedVeggie);
console.log(vegetables, typeof vegetables);
console.log(vegetables.pop()); // Tomato
console.log(vegetables);
console.log(vegetables.pop()); // Potato
console.log(vegetables); // []
console.log(vegetables.pop()); // undefined because an array is empty

// How can you check whether an array is empty?

let emptyArray = ["A"];

if (emptyArray.pop() == undefined) {
  console.log("Array is empty");
} else {
  console.log("Array is not empty");
}

if (emptyArray.length == 0) {
  console.log("Array is empty");
} else {
  console.log("Array is not empty");
}

// push

// It adds a new element on the top of stack or end of array

let initialArray = [1, 5, 2, 3, 9, 10];
console.log(initialArray.push(100));
console.log(initialArray);
console.log(initialArray.push(50)); // 8
console.log(initialArray); // [1, 5, 2, 3, 9, 10, 100, 50]

emptyArray = [];

if (emptyArray.push() == 0) {
  console.log("Array is empty");
} else {
  console.log("Array is not empty");
}

emptyArray = [];

// if (emptyArray.push("A") == 1) {
//   console.log("Array was empty");
// } else {
//   console.log("Array was not empty");
// }

// shift

let anotherArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(anotherArray.shift());
console.log(anotherArray);

anotherArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// unshift

console.log(anotherArray.unshift(1000));
console.log(anotherArray);

const fruitsArray = ["Banana", "Orange", "Apple", "Mango"];
fruitsArray[2] = "Grapes";
console.log(fruitsArray);
fruitsArray[fruitsArray.length] = "Guava";
console.log(fruitsArray);

// delete
delete fruitsArray[0];
console.log(fruitsArray);

// concat

let firstArray = [1, 2, 3, 4, 5, 6];
let secondArray = [-1, 21, 34, -4, 15, 26];

// [1, 2, 3, 4, 5, 6, -1, 21, 34, -4, 15, 26]

// for(let i = 0; i < secondArray.length; i++) {
//     firstArray.push(secondArray[i]);
// }

// concat

firstArray = firstArray.concat(secondArray, ["A", "B", "C"], ["D", "G"]);

console.log(firstArray);

// reverse

let array101 = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(array101.reverse());
// console.log(array101);

// Remove first element of an array and you have to use pop, you can't using shift?

array101.reverse();
array101.pop();
array101.reverse();

console.log(array101);
