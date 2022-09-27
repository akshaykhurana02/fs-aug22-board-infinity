/*
    Pattern 1 -

    1
    12
    123
    1234
    12345


    Pattern 2 -

    *
    **
    ***
    ****
    *****

*/

// Pattern 1

for (var i = 1; i <= 5; i++) { // Loop for Row  
  var text = "";
  for (var j = 1; j <= i; j++) { // Loop for Column
    text = text + j;
  }
  console.log(text);
}

/*

    When i = 1;
        text = "";
        j = 1 to i(1)
        text = "" + 1;
        text -> "1";
    Printed text -> 1

    When i = 2;
        text = "";
        j = 1 to 2

        text = "" + 1; -> "1"
        text = "1" + 2 -> "12"
    Printed text -> 12


*/

// Pattern 2

for (var i = 1; i <= 5; i++) { // Loop for Row  
  var text = "";
  for (var j = 1; j <= i; j++) { // Loop for Column    
    text = text + "*";
  }
  console.log(text);
}
