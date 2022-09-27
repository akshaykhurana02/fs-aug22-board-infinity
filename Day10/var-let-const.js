// Different Types of Variables

/*

Var

Properties -

Can be re-declared
Can be re-initailised

Scope -

Global Scope or Function Scope

*/

var firstName = "Akshay";
console.log(firstName);

// Re-Declaration

var firstName = "Amar";
console.log(firstName);

// Re-Initialisation

firstName = "Rahul";

/*

Let

Properties -

Can not be re-declared
Can be re-initailised

Scope -

Block Scope

*/

let lastName = "Khurana";
console.log(lastName);

// Re-Declaration
// let lastName = "Garg";

// Re-Initialisation
lastName = "Garg";
console.log(lastName);

/*

Const

Properties -

Can not be re-declared
Can not be re-initailised

Scope -

Block Scope

*/

const city = "Meerut";
console.log(city);

// Re Declaration
// var city = "Mumbai";

// Re Intialisation
city = "Dehradun";
