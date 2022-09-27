/*

    Primitive Data Types

    String
    Number
    Boolean
    Undefined
    Null
    BigInt
    Symbol

*/

var firstName = "Akshay";
console.log(`Name: ${firstName}`);

// Copying value of firstName to anotherName
// Shallow Copy
// Call by Value

var anotherName = firstName;
console.log(`Another Name: ${anotherName}`);

console.log(`\n`);
anotherName = "Shahrukh";
console.log(`Another Name: ${anotherName}`);
console.log(`Name: ${firstName}`);

var number1 = 50;
var number2 = number1;

console.log(number1, number2);

number2 = 60;

console.log(number1, number2);


/*

Non Primitive Data Types

    Object

*/

console.log(`\n`);

let obj = {
  a: 10,
  b: 11,
};
console.log(obj);

// Deep Copy
// Call by Reference
let obj2 = obj;
console.log(obj2);

obj2.a = 12;
console.log(`\n`);

console.log(obj);
console.log(obj2);
