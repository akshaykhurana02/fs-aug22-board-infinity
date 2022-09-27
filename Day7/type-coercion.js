// Type Coercion (Implicit or Autmatic Conversion from one type to another)

// Number to String Conversion

var x = 10 + "20"; // "10" + "20" -> 1020
var y = "20" + 10; // "20" + "10" -> 2010
var z = true + "10"; // "true" + "10" -> true10

console.log(x, y, z);

// String to Number Conversion

var a = 10 - "5"; // 10 - 5 -> 5
var b = 10 * "5"; // 10 * 5 -> 50
var c = 10 / "5"; // 10 / 5 -> 2
var d = 10 % "5"; // 10 % 5 -> 0

console.log(a, b, c, d);

// Boolean to Number

var e = true + 2; // 1 + 2 -> 3
var f = false + 2; // 0 + 2 -> 2

console.log(e, f);

// Equality Operator

var g = 10 == "10"; // 10 == 10 -> true
var h = true == 1; // 1 == 1 -> true
var i = true == "true"; // 1 == NaN (Not a Number) -> false

console.log(g, h, i);
