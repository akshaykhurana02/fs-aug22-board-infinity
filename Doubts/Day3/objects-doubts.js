/*

Modify the function checkObj to test if an object passed to the
function (obj) contains a specific property (checkProp). 
If the property is found, return that property's value. 
If not, return "Not Found".

*/

function checkObj(obj, checkProp) {
  // Only change code below this line

  let returnedText = "";

  if(obj.hasOwnProperty(checkProp)) {
     returnedText = obj[checkProp];
  } else {
      returnedText = "Not Found";
  }

  return returnedText;
  // Only change code above this line
}

let obj1 = {
    firstName: "Akshay",
    lastName: "Khurana"
}

console.log(checkObj(obj1, "firstName"));
