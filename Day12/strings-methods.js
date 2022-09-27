// Strings

let firstName = "Akshay"; // String
let secondName = "Aman Rajput"; // String
let anotherName = " ";

console.log(typeof firstName, typeof secondName, typeof anotherName);

// String Methods & Properties

// length -> Returns the length (or number of characters including white spaces)

console.log(firstName.length);
console.log(anotherName.length);

// trim -> It removes white spaces from the start and end of the string

let trimVariable = "       Wonderful City Of Noida    ";
// It will return Wonderful City Of Noida

console.log(trimVariable);
console.log(trimVariable.trim());

// trimStart
console.log(trimVariable.trimStart());

// trimEnd
console.log(trimVariable.trimEnd());

// Slice

let fruits = "Apple, Banana, Kiwi";
console.log(fruits); // Apple, Banana, Kiwi
console.log(fruits.slice(4, 10)); // It will consider characers from index 4 to 9
console.log(fruits.slice(4));

console.log(fruits.slice(-7, -2)); // a, Ki
console.log(fruits.slice(-7)); // a, Kiwi

// Is it returning a new string or changing the existing string ?
console.log(fruits);

let numbers = "0123456789";

console.log(numbers.slice(4, 8)); // 4567
console.log(numbers.slice(2)); // 23456789

console.log(numbers.slice(-10, -4)); // 012345
console.log(numbers.slice(-7)); // 3456789

console.log(numbers.slice(-10, 2));
console.log(numbers.slice(-10, -8));

// 0123456789

//  0   1  2  3  4  5  6  7  8  9
// -10 -9 -8 -7 -6 -5 -4 -3 -2 -1

console.log(numbers.slice(-7, 5)); // 34
console.log(numbers.slice(-7, -5)); // 34
console.log(numbers.slice(-7, 10)); // 3456789
console.log(numbers.slice(-7, 12)); // 3456789
console.log(numbers.slice(-7, -6)); // 3
console.log(numbers.slice(1, 3)); // 12

// Substring

console.log(numbers.substring(3, 8)); // 34567

console.log(numbers.substring(3, -8)); // 012

// console.log(numbers.substring(3, 0));
// console.log(numbers.substring(0, 3));

console.log(numbers.substring(0, 3)); // 012

// Substr

console.log(numbers.substr(4, 3)); // 456
console.log(numbers.substr(4)); // 456789
console.log(numbers.substr(4, -6)); //
console.log(numbers.substr(-4, 3)); // 678

// replace -> Only replace the first matched occurence

let textA = "Please visit Microsoft";
console.log(textA.replace("Please", "Can you"));
console.log(textA.replace("Bye", "Can you"));

let textB = "Hello I'm, from Microsoft. Microsoft is an IT firm.";
console.log(textB.replace("Microsoft", "Google"));

// Passing g flag using regular expressions (RegEx)
console.log(textB.replace(/Microsoft/g, "Google"));

console.log(textB.replace("microsoft", "Google")); // Case sensitive matching

// Passing g flag using regular expressions (RegEx)
// Case InSenstivity
console.log(textB.replace(/MicROsoFt/i, "Google"));
console.log(textB.replace(/MicROsoFt/gi, "Google"));

// replaceAll -> It will replace all matched occurences

console.log(textB.replaceAll("Microsoft", "Google"));

// Example

// username123
// userName123 -> Invalid

// toLowerCase

let favouriteActor = "Amitabh Bachchan";
console.log(favouriteActor.toLowerCase()); // amitabh bachchan
console.log(favouriteActor.toLocaleLowerCase()); // amitabh bachchan

// toUpperCase

console.log(favouriteActor.toUpperCase()); // AMITABH BACHCHAN
console.log(favouriteActor.toLocaleUpperCase()); // AMITABH BACHCHAN

// amitabh
// Amitabh

let actor = "amitabh";
console.log(actor.slice(0, 1).toUpperCase() + actor.slice(1));

// concat

let first = "ABC";
let second = "DEF";
console.log(first.concat(second)); // ABCDEF
console.log(actor.slice(0, 1).toUpperCase().concat(actor.slice(1)));


// padEnd

let name1 = "Akshay";
console.log(name1.padEnd(10, "*")); // Akshay****
console.log(name1.padEnd(7, "*")); // Akshay*

// padStart

console.log(name1.padStart(10, "*")); // ****Akshay
console.log(name1.padStart(7, "*")); // *Akshay

// Example

/*

    1234123412341234
    11/24
    001

    1234123412341234 -> ************1234

*/

let cardNumber = "1234123412341234";
console.log(cardNumber);
console.log(cardNumber.slice(-4).padStart(cardNumber.length, "*"));


// charAt

let favouriteColour = "Purple";
console.log(favouriteColour.charAt(3));
console.log(favouriteColour[3]);

console.log(favouriteColour.charAt(10)); // ""
console.log(favouriteColour[10]); // undefined


// charCodeAt
console.log(favouriteColour.charCodeAt(3)); // Returns the ASCII Value of the identified character

console.log(actor.charAt(0).toUpperCase() + actor.slice(1));
console.log(actor[0].toUpperCase() + actor.slice(1));


// Split -> For converting string to an array

let flowers = "Rose Jasmine Lotus Orchid";

console.log(flowers.split(" "));

/*

    0 - Rose
    1 - Jasmine
    2 - Lotus
    3 - Orchid

*/

console.log(flowers.split());

/*

    0 - Rose Jasmine Lotus Orchid

*/

console.log(flowers.split(""));




// For converting array to a string

let givenArray = ["1", "2", "3", "4", "5"];
console.log(givenArray.toString()); // 1,2,3,4,5
console.log(givenArray.toString().replaceAll(",", ""));