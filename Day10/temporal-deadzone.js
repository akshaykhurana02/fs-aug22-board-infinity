// console.log(firsName);

// It can not be accessed before it is actually declared
// because it is in Temporal Dead Zone


/*

The time difference between when a variable of type
let or const is assigned undefined valued in Memory Creation
Phase & when it actually got the value in Execution Phase

*/


let firstName = "Akshay"; // Script Scope
console.log(firstName);

/*

For firstName ->

Temporal Deadzone -

Time b/w Memory Creation Phase & Line 15th

*/