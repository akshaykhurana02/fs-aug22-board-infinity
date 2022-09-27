// Primitive Types
// Call by Value
// Shallow Copy

let firstName = "Akshay";
let secondName = firstName;

console.log(firstName, secondName);

secondName = "Amar";

console.log(firstName, secondName);



// Non Primitve Types
// Call by Reference
// Deep Copy

let student1 = {
  firstName: "Akshay",
  lastName: "Khurana",
};

let student2 = student1;

console.log(student1, student2);

student2.lastName = "Khan";

console.log(student1, student2);

let student3 = student2;

console.log(student1, student2, student3);

student3.firstName = "Salman";

console.log(student1, student2, student3);