// Type Conversion
// When forcefully convert one type to another

// String to Number

var firstNumber = "64";
console.log(firstNumber, typeof firstNumber);

// firstNumber = parseInt(firstNumber);

// OR

firstNumber = Number(firstNumber);
console.log(firstNumber, typeof firstNumber);

var secondNumber = "54A";
console.log(secondNumber, typeof secondNumber);

secondNumber = Number(secondNumber);
console.log(secondNumber, typeof secondNumber);

// Number to String

var sum = 43;
console.log(sum, typeof sum);

sum = String(sum);
// sum = sum + "";
console.log(sum, typeof sum);