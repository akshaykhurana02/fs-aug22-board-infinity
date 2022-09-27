// Set

let array1 = ["Akshay", "Rahul", "Amar", "Aman", "Amar", "Aman"];

let set = new Set(array1);
console.log(set);

let obj1 = {
  1: "Akshay",
  2: "Aman",
};

console.log(obj1);

// Map

let map1 = new Map();
map1.set(1, "Akshay");
map1.set(2, "Bharat");
map1.set(3, "Cherry");
map1.set(2, "Rahul");

console.log(map1);

var map2 = new Map([
  [5, 4],
  [7, 9],
]);

console.log(map2 instanceof Object); // true

var obj = new Object();
console.log(obj instanceof Map); // false
