// Spread Operator (...)

let fruits = ["Mango", "Litchi", "Banana"];
let vegetables = ["Tomato", "Ginger", "Garlic"];

// let grocery = fruits.concat(vegetables);

let grocery = [...fruits, ...vegetables];

console.log(grocery);

// Numbers -> It is an array of arguments
function sum(...numbers) {
  let sum = numbers.reduce((acc, i) => {
    return (acc += i);
  }, 0);
  console.log(`Sum is ${sum}`);
}

sum();
sum(6);
sum(1, 2);
sum(1, 2, 3, 4);
sum(1, 2, 3, 4, 5, 6, 7, 8);
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23, 24, 45, 56, 78);
