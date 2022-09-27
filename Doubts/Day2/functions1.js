// function calculateSum(a, b) {
//   let sum = a + b;
//   return sum;
// }

// console.log(calculateSum(1, 2, 100));

// var firstName = "Akshay";

// function parent(a, b) {
//   return function () {
//     console.log(a - b);
//   };
// }

// console.log(parent(6, 2));

// let student = parent(6, 2);

// student(4, 5);

function sub(a, b) {
  return function () {
    console.log(a - b);
  };
}

sub(5, 2)();

// console.log(undefined - undefined);
