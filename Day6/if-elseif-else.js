// Conditionals


// IF, ELSE IF, ELSE

/*

Example 1 -

Color of sky -> Blue -> Morning
Color of sky -> Black -> Night

*/

let colorOfSky = "Black";

if (colorOfSky == "Blue") {
  console.log("Morning");
} else {
  console.log("Night");
}

/*

Example 2 -

Red -> Stop
Yellow -> Watch! BE Careful!
Green -> Go

*/

let trafficLightColour = "Green";

if (trafficLightColour == "Red") {
  console.log("Stop!");
} else if (trafficLightColour == "Yellow") {
  console.log("Watch! Be Careful.");
} else if (trafficLightColour == "Green") {
  console.log("Go!!!!!");
} else {
  // Fallback Scenario
  console.log("Not a valid colour!");
}

/*

Example 3 ->

Age

*/

let age = 13;

if (age > 0 && age < 13) {
  console.log("You are a child!");
} else if (age >= 13 && age < 18) {
  console.log("You are a teenager!");
} else if (age >= 18 && age < 40) {
  console.log("You are a adult!");
} else if (age >= 40 && age < 60) {
  console.log("You are middle aged!");
} else {
  console.log("You are old!");
}


