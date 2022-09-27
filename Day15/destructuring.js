// Destructuring

var names = ["alpha", "beta", "gamma", "delta", "abcd"];

var firstName = names[0];
var secondName = names[1];

console.log(firstName, secondName); // alpha beta

let x, y;
[x, y] = names;

console.log(x, y); // alpha beta

let a, g;
[a, , , g] = names;

console.log(a, g); // alpha delta



// Rest Operator (...)

let a1, a2, a3;
[a1, a2, ...a3] = ["Akshay", "Khurana"];

console.log(a1, a2, a3); // Akshay Khurana []

let b1, b2, b3;
[, b1, b2, ...b3] = names;

console.log(b1, b2, b3); // alpha beta ["gamaa", "delta"]

let [c1, c2, ...[c3, c4]] = names;
console.log(c1, c2, c3, c4);

// Pizza, Pasta, Macroni...

let menu = ["Pizza", "Pasta", "Macroni", "Burger", "Garlic Bread"];

let p1, p2, remainingMenu;
[p1, p2, ...remainingMenu] = menu;

console.log(p1, p2, remainingMenu);

// Print A Banner for P1
// Print a Banner for P2
// Print Banner for Remaining Values


// Spread Operator


