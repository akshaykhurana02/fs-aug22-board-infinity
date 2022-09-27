// Scope

var firstName = "Akshay";
let lastName = "Khurana";
const city = "Meerut";

function firstFunction() {
  var firstName = "Rahul";
  let lastName = "Dravid";
  const city = "Bangalore";
  secondFunction();
  console.log(firstName, lastName);
}

function secondFunction() {
//   var firstName = "Virat";
//   let lastName = "Kohli";
//   const city = "Pune";

  console.log(firstName, lastName);
}

firstFunction();
