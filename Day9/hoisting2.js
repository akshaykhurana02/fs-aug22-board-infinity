// Hoisting

/*

In Memory Creation Phase -
1 Variable
1 Function

favouriteColour -> undefined
abc() -> {
  console.log("ABC");
}

*/


abc();

// Variables

console.log(favouriteColour); // undefined
var favouriteColour = "Green";
console.log(favouriteColour); // Green

// Functions

function abc() {
  console.log("ABC");
}
