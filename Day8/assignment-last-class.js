/*

  Assignment 28th August


  Pattern 1

  1
  21
  321
  4321
  54321

  Pattern 2

  *
  **
  ***
  ****
  *****
  ****
  ***
  **
  *
  
  Pattern 3

  #
  ###
  #####
  #######
  #########

*/

/*

  Pattern 1 -

  1
  21
  321
  4321
  54321

*/

for (let i = 1; i <= 5; i++) {
  let text = "";
  for (let j = i; j >= 1; j--) {
    // Descending Order
    text += j;
  }
  console.log(text);
}

/*

  Pattern 2 -

  *
  **
  ***
  ****
  *****
  ****
  ***
  **
  *

  *
  **
  ***
  ****
  *****

  ****
  ***
  **
  *

  
*/

// for (var i = 1; i <= 5; i++) {
//   // For Rows
//   var text = "";
//   for (var j = 1; j <= i; j++) {
//     // For Columns
//     text = text + "*";
//   }
//   console.log(text);
// }

// for (var i = 4; i >= 1; i--) {
//   // For Rows
//   var text = "";
//   for (var j = 1; j <= i; j++) {
//     // For Columns
//     text = text + "*";
//   }
//   console.log(text);
// }

// for (let i = 1; i <= 5; i++) {
//   let text = "";

//   for (let j = 1; j <= i; j++) {
//     text += "*";
//   }
//   console.log(text);
// }

// for (let i = 4; i >= 1; i--) {
//   let text = "";
//   for (let j = i; j >= 1; j--) {
//     text += "*";
//   }
//   console.log(text);
// }

const n = 5;
var text = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    text = text + "*";
  }
  text = text + "\n";
}
for (let i = 1; i <= n - 1; i++) {
  for (let j = 1; j <= n - i; j++) {
    text = text + "*";
  }
  text = text + "\n";
}
console.log(text);

/*

  #
  ###
  #####
  #######
  #########

*/

/*
  Logic -

  5 Rows
  1st row -> 1
  2nd row -> 3
  3rd row -> 5
  4th row -> 7
  5th row -> 9

*/

for (var i = 1; i <= 9; i = i + 2) {
  // For Rows
  var text = "";
  for (var j = 1; j <= i; j++) {
    // For Columns
    text = text + "#";
  }
  console.log(text);
}
