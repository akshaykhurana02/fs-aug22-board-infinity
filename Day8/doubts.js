// Pattern Problem 1

/*

 *
 **
 ***
 ****
 *****

 */

for (var i = 1; i <= 5; i++) {
  // For Rows
  var text = "";
  for (var j = 1; j <= i; j++) {
    // For Columns
    text = text + "*";
  }
  console.log(text);
}



// Pattern Problem 2

/*
    1
    12
    123
    1234
    12345
*/

for (var i = 1; i <= 5; i++) {
  // For Rows
  var text = "";
  for (var j = 1; j <= i; j++) {
    // For Columns
    text = text + j;
  }
  console.log(text);
}
