// Operators

// Arithmetic Operator

// % (Remainder or Modulus Operator)

var a = 72;
var b = 2;

console.log(a / b);
console.log(a % b);

// Example

var c = 78;

if (c % 2 == 0) {
  console.log(`${c} is even!`);
} else {
  console.log(`${c} is odd!`);
}

// Increment Operator

var counter = 0;

var z1 = counter++; // Postfix Operator
// First returns the current value and then increment

// counter -> 1

var z2 = ++counter; // Prefix Operator
// First increment then returns the updated value

console.log("Counter ", counter);
console.log("Z1 ", z1);
console.log("Z2 ", z2);

// Decrement Opeator

var a1 = 43;
a1--;
console.log("A1 ", a1);
--a1;
console.log("A1 ", a1);

// Example1

var counter100 = 100;

var c1 = ++counter100;

console.log(c1);
console.log(counter100);

// Example 2

var count1 = 50;
// count1 = count1 + 1;
// 50 + 1 -> 51 -> 51 will be assigned to count1
// var d40 = count1++;
var d41 = ++count1;
console.log(count1);
// console.log("D40", d40);
console.log("D41", d41);

// Exponentiation (**)

// 2 raise to the power 3 -> 2 * 2 * 2

var e1 = 23;
var e2 = e1 ** 2; // e1 * e1
console.log(e2);

var e3 = 16;
var e4 = e3 ** 2; // e3 * e3
console.log(e4);

var e5 = 2;
var e6 = e5 ** 10; // e5 * e5 .... 10 times
console.log(e6);

// Quiz


// BODMAS -> Bracket, Order, Division, Multiplication, Addition, Subtraction

console.log((7 % 2) + 3 * 2 + 1);
// 1st step -> 1 + 3 * 2 + 1
// 2nd step -> 1 + 6 + 1
// 3rd step -> 8 (Output)

console.log(8 ** 2 + 48);
// 1st step -> 64 + 48
// 2nd step -> 112 (Output)

console.log((7 % 2) + 50);
// 1st step -> 1 + 50
// 2nd step -> 51
