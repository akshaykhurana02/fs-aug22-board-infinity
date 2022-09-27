function calculateProduct(a, b) {
  return function () {
    console.log(`Product is ${a * b}`);
  };
}

// 1st way ->

var returnedFunction = calculateProduct(6, 7);
returnedFunction();

// 2nd way ->

calculateProduct(9, 7)();

// Function Currying

function friends(f1) {
  return function (f2) {
    return function (f3) {
      console.log(`Friends -> [${f1}, ${f2}, ${f3}]`);
    };
  };
}

var func1 = friends("A");
var func2 = func1("B");
func2("C");

friends("A")("B")("C");


