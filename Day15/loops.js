// For In
// It is used to iterate over keys of an object

const person = {
  fname: "John",
  lname: "Doe",
  city: "London",
  age: 25,
};

let text = "";

for (let x in person) {
  text += person[x] + " ";
}

console.log(text); // John Doe London 25

let names = ["Akshay", "Aman", "Rahul", "Kiran"];

for (let x in names) {
  // console.log(names[x]);
}

// For Of
// It is used to iterate Arrays

const cars = ["BMW", "Volvo", "Mini"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

for (let x of cars) {
  console.log(x);
}
