// Assignment

/*

Pattern 1 -

1
123
12345
1234567
123456789

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
  var text = "";
  for (var j = 1; j <= i; j++) {
    text = text + j;
  }
  console.log(text);
}

/*

Pattern 2 -

1
**
123
****
12345
******

*/

for (var i = 1; i <= 6; i++) {
  var text = "";
  for (var j = 1; j <= i; j++) {
    if (i % 2 == 0) {
      // Even Row
      text = text + "*";
    } else {
      // Odd Row
      text = text + j;
    }
  }
  console.log(text);
}

/*

Pattern 3 -

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

Hint : You have to use an extra loop for adding space (" ")

*/

/*
  Logic -

  5 Rows
  1st row -> 4 Spaces + 1 *
  2nd row -> 3 Spaces + 3 *
  3rd row -> 2 Spaces + 5 *
  4th row -> 1 Space + 7 *
  5th row -> 0 Space + 9 *

*/

let spaceCounter = 4;
var text = "";
for (i = 1; i <= 9; i = i + 2) {
  // For printing Spaces
  for (j = spaceCounter; j >= 1; j--) {
    text = text + " ";
  }
  // For printing Characters
  for (j = 1; j <= i; j++) {
    text = text + "*";
  }
  spaceCounter--;
  text = text + "\n";
}

spaceCounter = 1; // Resetting spaceCounter for the next set of spaces

/*
  Logic -

  4 Rows
  1st row -> 1 Space + 7 *
  2nd row -> 2 Spaces + 5 *
  3rd row -> 3 Spaces + 3 *
  4th row -> 4 Space + 1 *

*/

for (i = 7; i >= 1; i = i - 2) {
  // For printing Spaces
  for (j = 1; j <= spaceCounter; j++) {
    text = text + " ";
  }
  // For printing Characters
  for (j = 1; j <= i; j++) {
    text = text + "*";
  }
  spaceCounter++;
  text = text + "\n";
}

console.log(text);

/*

Pattern 4 -

1
21
123
4321
12345
654321
1234567

*/

var text = "";
for (i = 1; i <= 7; i++) {
  if (i % 2 == 0) {
    // Print in Descending Order if even row
    for (j = i; j >= 1; j--) {
      text = text + j;
    }
  } else {
    // Print in Ascending Order if odd row
    for (j = 1; j <= i; j++) {
      text = text + j;
    }
  }
  text = text + "\n";
}

console.log(text);
