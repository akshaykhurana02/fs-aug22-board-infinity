// Read about slice, substring & substr in Strings

// Capitalize the first charcacter of each word in a sentence

/*

    For Example -

    My name is Akshay
    My Name Is Akshay

    amitabh bachchan
    Amitabh Bachchan

*/

let sentence = "India is a beautiful country.";

let sentenceArray = sentence.split(" ");
let finalSentence = "";

for (let i = 0; i < sentenceArray.length; i++) {
    finalSentence += sentenceArray[i].charAt(0).toUpperCase() + sentenceArray[i].slice(1) + " ";    
}

finalSentence.trimEnd();

// let finalSentence = sentenceArray.join(" ");
// let finalSentence = sentenceArray.toString().replaceAll(",", " ");
console.log(finalSentence);