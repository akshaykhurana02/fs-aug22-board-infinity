// Functions

var a = 2;
var b = 3;
var sum1 = a + b; // Condition
console.log(sum1);

var c = 4;
var d = 5;
var sum2 = c + d; // Condition
console.log(sum2);

var e = 5;
var f = 6;
var sum3 = e + f; // Condition
console.log(sum3);

// 0 parameters

// Function Declaration
function printHelloWorld() {
  // Here, printHelloWorld is function name
  console.log("Hello JavaScript"); // Statement
}

// Function Invocation or Function Calling
printHelloWorld();

// 1 Parameter

function calculateAreaOfCircle(radius) {
  // Here radius is a parameter
  var area = 3.14 * radius * radius;
  console.log(`Area of given circle is ${area}`);
}

// During invocation whatever input we pass, that is known as argument

calculateAreaOfCircle(1);
calculateAreaOfCircle(6);

/*

    Interview Question -

    What is the difference between parameter and argument?

*/

// 2 Parameters

function calculateSum(a, b) {
  // Here a & b are parameters
  console.log(`Sum is : ${a + b}`);
}

calculateSum(2, 4); // Here 2 & 4 are arguments
calculateSum(5, 2);
calculateSum(7, 4);
calculateSum("Akshay", "Khurana");

calculateSum(1, 2, 3); // 3
calculateSum("Aman"); // Amanundefined
calculateSum(2); // NaN

// Function Declaration v/s Function Expression

// Function Declaration

function product(a, b) {
  return a * b;
}

// By default all the functions will return undefined

console.log(`Product is ${product(2, 3)}`);
console.log(`Product is ${product(4, 5)}`);
console.log(`Product is ${product(9, 6)}`);

// Function Expression

var calculateRemainder = function (a, b) {
  return a % b;
};

console.log(`Remainder is ${calculateRemainder(5, 2)}`);
console.log(`Remainder is ${calculateRemainder(7, 2)}`);
console.log(`Remainder is ${calculateRemainder(8, 2)}`);

function printAMessage(message) {
  console.log(`Message is : ${message}`);
}

console.log(printAMessage);

printAMessage("Good Morning!");

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

// Here

/*

Case 1 -

outerFunction is Higher Order Function because it is passing another function as an argument

*/
