// Hoisting

/*

Compilation/Interpreation happens in 2 phases -

1. Memory Creation Phase
2. Execution Phase



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
