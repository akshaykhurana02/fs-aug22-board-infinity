// Slice

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(1));
console.log(fruits.slice(1, 3));
console.log(fruits.slice(-1));
console.log(fruits.slice(-3, -1));
console.log(fruits.slice(-1));
console.log(fruits.slice(-3, 2));

console.log(fruits);
console.log(`${fruits}`); // It automatically used toString method and converted array to a string


// Splice

// Case 1 -> Add Grapes at 2nd index and not remove any other element

// fruits.splice(2, 0, "Grapes");

// Case 2 -> Add Grapes at 2nd index and not remove exisiting 2nd index element

// fruits.splice(2, 1, "Grapes");


// Case 3 -> Add Multiple Fruits & don't remove any existing element
// fruits.splice(2, 0, "Guava", "Litchi", "Strawberry", "Plum");

// Case 4 -> Add Multiple Fruits & also remove some exisitng element
// fruits.splice(2, 2, "Guava", "Litchi", "Strawberry", "Plum");
// fruits.splice(2, 3, "Guava", "Litchi", "Strawberry", "Plum");
// fruits.splice(2, 3, "Strawberry");

console.log(fruits);

// Interview Question -

// What is the difference b/w slice & splice?
