// Slice

// Strings

let text = "Hello World!";

// Positive

// Case 1, Only the start index
console.log(text.slice(3));

// Case 1, Start index & end index both
console.log(text.slice(6, 10)); // 6 to 9


// Negative

// Case 3, Only the start index
console.log(text.slice(-3)); // -3, -2, -1

// Case 4, Start index & end index both
console.log(text.slice(-10, -5)); // -10, -9, -8, -7, -6

console.log(text.slice(-5, -10), text.slice(-5, -10) == "");

console.log(text);


// Arrays


let arrayOfNumbers = [1, 4, 5, 2, 3, 7, 8, 10, 11, 3, 5];

// Case 1 - Only start index (Positive)

console.log(arrayOfNumbers.slice(4));

// Case 2 - Start & End index (Positive)

console.log(arrayOfNumbers.slice(4, 8)); // 4, 5, 6, 7

// Case 3 - Start (Negative)

console.log(arrayOfNumbers.slice(-4));

// Case 4 - Start & End index (Negative)

console.log(arrayOfNumbers.slice(-8, -4)); // -8, -7, -6, -5

console.log(arrayOfNumbers.slice(-4, -8)); // -> []

console.log(arrayOfNumbers);