// Switch

// var dayValue = new Date().getDay();
var dayValue = 3;
console.log(dayValue);

/*
Sunday -> 0,
Monday -> 1,
Tuesday -> 2
.
.
. 
Saturday -> 6
*/

var day;
switch (dayValue) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}

console.log(day);
