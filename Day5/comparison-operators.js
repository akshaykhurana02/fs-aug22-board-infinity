// Comparions Operators (Always Return a boolean operator)

// == (Equality Operator)

console.log(2 == 2); // true
console.log(2 == 3); // false
console.log(2 == "2"); // true (It will not check the datatype)

// === (Strict Equality Operator)

console.log(2 === "2"); // false (It will not check the datatype)

// Interview Question -> What is the difference between equality and strict equality operator?

// != (Not Equal To Operator)

console.log("==");
console.log(2 != 3); // true
console.log(2 != 2); // false
console.log(2 != "2"); // false

// !== (Strict Not Equal To Operator)

console.log("===");
console.log(2 !== 3); // true
console.log(2 !== 2); // false
console.log(2 !== "2"); // true

// > (Greater Than)

console.log(">");
console.log(3 > 2); // true
console.log(2 > 2); // false
console.log(3 > 5); // false

// > (Greater Than Equal to)

console.log(">=");
console.log(3 >= 2); // true
console.log(2 >= 2); // true
console.log(3 >= 5); // false

// > (Lesser Than)

console.log("<");
console.log(3 < 2); // false
console.log(2 < 2); // false
console.log(3 < 5); // true

// > (Lesser Than Equal to)

console.log("<=");
console.log(3 <= 2); // false
console.log(2 <= 2); // true
console.log(3 <= 5); // true
