let firstName = new String("Akshay");
let anotherName = firstName;
let lastName = "Khurana";

var map = new Map([
  [5, 4],
  [7, 9],
]);

//output:true
console.log(map instanceof Object);

console.log(firstName instanceof String);
console.log(firstName instanceof Object);

// console.log(typeof firstName); // object
// console.log(typeof firstName); // string

// console.log(firstName);

//output:false
var obj = new Object();
// console.log(obj instanceof Map);
