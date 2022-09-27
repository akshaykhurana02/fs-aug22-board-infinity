// Arrow Function

// No Arguments

function firstName() {
  console.log("First Function");
}

let secondFunction = () => {
  console.log("Second Function");
};

// 1 Argument

function multiplyBy2(num) {
  return num * 2;
}

let multiplyBy3 = (num) => {
  return num * 3;
};

let multiplyBy4 = (num) => {
  num = num * 4;
  return num;
};

let multiplyBy5 = (num) => num * 5;

console.log(multiplyBy5(2));

// 2 Arguments

let sum = (a, b) => "Akshay";

console.log(sum(29, 51));
