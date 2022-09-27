// Scope

/*

    Var - Global Scope or Function Scope
    Let - Block Scope
    Const - Block Scope

*/

var firstName = "Akshay";
let lastName = "Khurana";
const city = "Meerut";

// Scope Chain
// Inner Scope to Outer Scope
{
    // let lastName = "Pal";
    {
        // let lastName = "Khan";
        // console.log(lastName);
    }
}

function firstFunction() {
    var firstName = "Rahul";
    let lastName = "Kapoor";
    const city = "Mumbai";
    {
        let lastName = "Shakeel";
        secondFunction();
        console.log(firstName, lastName, city);
    }
}

function secondFunction() {
    var firstName = "Raj";
    let lastName = "Sharma";
    const city = "Pune";
    {
        let lastName = "Ram";
        console.log(firstName, lastName, city);
    }
}


firstFunction();
