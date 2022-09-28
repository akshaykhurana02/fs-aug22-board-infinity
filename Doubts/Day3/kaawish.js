/*

Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.

*/

/*

Test Cases -

nextInLine([], 5) should return a number.

nextInLine([], 1) should return 1

nextInLine([2], 1) should return 2

nextInLine([5,6,7,8,9], 1) should return 5

After nextInLine(testArr, 10), testArr[4] should be 10

*/

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var removedElement = arr.shift();
  return removedElement; // Change this line
}

// Test Setup
var testArr = [1, 2, 3, 4, 5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 10)); // Modify this line to test
console.log(testArr[4]); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
