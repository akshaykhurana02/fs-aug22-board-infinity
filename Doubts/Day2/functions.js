// Functions

function calcSum1(a, b, sum) {
  var sum = a + b;
  return sum;
}

function calcSum2(a, b) {
  console.log(a, b);
}

calcSum2(4, 5);

function checkWhetherEvenOrOdd(number) {
  if (number % 2 == 0) {
    return "Even";
  }
  return "Odd";
}
