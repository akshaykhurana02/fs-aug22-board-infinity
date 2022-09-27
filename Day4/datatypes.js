/*

Datatypes

Primitve -

Number
String
Boolean
Undefined
Null
BigInt
Symbol

Non Primitive -

Object

*/

// Primitive Datatypes

// Number
var rollNumber = 11;
console.log(rollNumber, typeof rollNumber);

// String
var firstName = "Akshay";
console.log(firstName, typeof firstName);

// Boolean
var counter = true;
console.log(counter, typeof counter);

// Undefined
var lastName;
console.log(lastName, typeof lastName);

// Null
var phoneNumber = null;
console.log(phoneNumber, typeof phoneNumber); // (Revisit)

// BigInt -> It is used to store higher range number values
const bigIntNumber = 9009999999999999n;
console.log(bigIntNumber, typeof bigIntNumber);

// Symbol -> (Revisit)
const abc = Symbol("hi");
const xyz = Symbol("hi");
// console.log(abc, typeof abc);
// console.log(xyz, typeof xyz);

// Non Primitive Data Types

// Object

// The Object type represents one of JavaScript's data types.
// It is used to store various keyed collections and more complex entities.

var contactDetails = {
  firstName: "Akshay",
  lastName: "Khurana",
  rollNumber: 26n,
  city: "Meerut",
  phoneNumber: "+919999999999",
};

console.log(contactDetails, typeof contactDetails);
console.log(contactDetails.rollNumber, typeof contactDetails.rollNumber);

// Array (It is also an object)

var arrayOfNumbers = [1, 2, 3, 4, 6, 5, 4, 3, 2, 7, 8, 9];
console.log(arrayOfNumbers, typeof arrayOfNumbers);

var anotherArray = ["Akshay", "Khurana", 26n, "Meerut", "+919999999999"];
console.log(anotherArray, typeof anotherArray);

var mixedArray = [
  23,
  "Akshay",
  true,
  lastName,
  null,
  26n,
  Symbol("Bye"),
  { firstName: "Akshay", lastName: "Khurana" },
];
console.log(mixedArray, typeof mixedArray);
console.log(mixedArray[1]);

var classDetails = [
  {
    firstName: "Neelam",
    lastName: "Thuthgar",
    city: "Mumbai",
  },
  {
    firstName: "Akshay",
    lastName: "Khurana",
    city: "Mumbai",
  },
  {
    firstName: "Anurag",
    lastName: "Thuthgar",
    city: "Mumbai",
  },
];
console.log(classDetails, typeof classDetails);

var arrayOfAlphabets = ["A", "B", "C", "D", "E"];
console.log(arrayOfAlphabets[0]);

