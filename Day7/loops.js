// Loops

// What is the use of Loops?

// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");

// For Loop
// It is used generally while traversing an array or a string

/*
    Syntax -

    for(initialiser; condition; increment/decrement) {
        // Logic
    }

*/

for (var i = 1; i <= 5; i++) {
  // console.log("Hello");
}

// console.log("After Loop");

// Explaination

// 1st iteration -> i = 1, 1 <= 5 -> true -> Print Hello -> i incremented to 2
// 2nd iteration -> i = 2, 2 <= 5 -> true -> Print Hello -> i incremented to 3
// 3rd iteration -> i = 3, 3 <= 5 -> true -> Print Hello -> i incremented to 4
// 4th iteration -> i = 4, 4 <= 5 -> true -> Print Hello -> i incremented to 5
// 5th iteration -> i = 5, 5 <= 5 -> true -> Print Hello -> i incremented to 6
// 6th iteration -> i = 6, 6 <=5 -> false -> Exit the loop

var arrayOfNumbers = [1, 2, 3, 5, 4, 3, 2, 6, 7, 8, 9, 10, 1, 2];
// Index to n - 1

// Traversing Array
for (var i = 0; i < arrayOfNumbers.length; i++) {
  // console.log(arrayOfNumbers[i]);
}

// Traverse String

var fullName = "AkshayKhurana";
for (var i = 0; i < fullName.length; i++) {
  // console.log(i, fullName.charAt(i));
}

// While Loop

var counter1 = 4; // Initialiser

while (counter1 <= 3) {
  // Condition
  console.log(counter1);
  counter1++; // Increment/Decrement
}
console.log("After 1st Loop");
/*
    1st iteration -> counter = 1 -> 1 <=3 -> true -> Print -> counter = 2
    2nd iteration -> counter = 2 -> 2 <=3 -> true -> Print -> counter = 3
    3rd iteration -> counter = 3 -> 3 <=3 -> true -> Print -> counter = 4
    4th iteration -> counter = 4 -> 4 <=3 -> false -> Exit the loop

*/

// Do While Loop
// It will atleast run once
// Because checking is happening after we are executing the block

var counter2 = 4;

do {
  console.log(counter2);
  counter2++; // Increment/Decrement
} while (counter2 <= 3); // Condition

console.log("After 2nd Loop");

/*
    1st iteration -> Print Counter = 1 -> Counter = 2 -> 2 <=3 -> true
    2nd iteration -> Print Counter = 2 -> Counter = 3 -> 3 <=3 -> true
    3rd iteration -> Print Counter = 3 -> Counter = 4 -> 4 <=3 -> false -> Exit the loop

*/
