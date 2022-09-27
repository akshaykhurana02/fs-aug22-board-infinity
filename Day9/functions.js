// Functions

/*

  Higher Order Function -> 

  These are those functions which either accepts another function as an argument or
  return a function or do both


*/

/*

Case 1 -

outerFunction is Higher Order Function because it is passing another function as an argument

*/

function outerFunction(a, b) {
  console.log(a);
  console.log(b);
  a();
  b();
}

outerFunction(
  function () {
    console.log("Function 1");
  },
  function () {
    console.log("Function 2");
  }
);

function calculateSum(a, b) {
  return a + b;
}

console.log(calculateSum(3, 0));
console.log(calculateSum(3, 9));

function helloMessage() {
  console.log("Hello!");
}

helloMessage();


var def = function() {
  console.log("DEF");
}

def();

/*

Case 2- Returning another function from a function

*/

function calculateProduct(a, b) {
  return function () {
    console.log(`Product is ${a * b}`);
  };
}

console.log(calculateProduct);

function abc() {
  console.log("\n");
}

abc();

// 1st way ->

var returnedFunction = calculateProduct(6, 7);
returnedFunction();

// 2nd way ->

calculateProduct(9, 7)();

// Function Currying






















function printAMessage() {
  return "Hello, JavaScript!";
}

var returnedMessage = printAMessage();
// console.log(returnedMessage);
// console.log(printAMessage());
// console.log("Hello, JavaScript!");

function isOddOrEven(number) {
  if (number % 2 == 0) {
    // Even Number
    console.log(`${number} is even!`);
  } else {
    // Odd Number
    console.log(`${number} is odd!`);
  }
}

// isOddOrEven(4);
// console.log(isOddOrEven(5));


function isOddOrEvenAnother(number) {
  if (number % 2 == 0) {
    // Even Number
    return `${number} is even!`;
  } else {
    // Odd Number
    return `${number} is odd!`;
  }
}

// console.log(isOddOrEvenAnother(6));
