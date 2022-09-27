var number = 10 + "1"; // Type Coercion -> It is converting 10 to "10"
console.log(number);

var diff = 10 - "1A"; // Type Coercion -> "1" to 1
console.log(diff);

var a = "10" - "1";
console.log(a);

var abc = true + true; // 1 + 1
var def = true - false; // 1 - 0
console.log(abc);
console.log(def);

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

console.log(classDetails[0].lastName);
