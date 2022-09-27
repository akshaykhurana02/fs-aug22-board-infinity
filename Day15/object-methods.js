// Object Methods

const person = {
  fname: "John",
  lname: "Doe",
  city: "London",
  age: 25,
};

let arrayOfKeys = Object.keys(person);
console.log(arrayOfKeys);

let arrayOfValues = Object.values(person);
console.log(arrayOfValues);

console.log(arrayOfValues.join(" ")); // John Doe London 25

// How to check whether an object is empty?

let obj1 = {}

if(Object.keys(person).length == 0) {
    console.log("Object is empty!");
}
