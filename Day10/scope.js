// Scope

// var -> Global Scope or Function Scope
// var -> Block Scope
// var -> Block Scope

console.log(firstName); // undefined
var firstName = "Akshay";
console.log(firstName); // Akshay

// console.log(lastName);
// console.log(city);
let lastName = "Khurana";
console.log(lastName); // Khurana

console.log(city);
const city = "Meerut";
console.log(city); // Meerut