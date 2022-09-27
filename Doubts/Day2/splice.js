// Splice

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// Case 1 -> Add Grapes at 2nd index and not remove any other element

fruits.splice(0, 2, "Grapes", "A", "B", "C", "D");

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
