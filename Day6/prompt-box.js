// let person = prompt("Please enter your name", "Harry Potter");
// let text;
// if (person == null || person == "") {
//   text = "User cancelled the prompt.";
// } else {
//   text = "Hello " + person + "! How are you today?";
// }

// console.log(text);


// Traffic Light Example

let trafficLightColour = prompt("Enter Traffic Light Colour", "Green");

let text;
if (trafficLightColour == "Red") {
  text = "Stop!";
} else if (trafficLightColour == "Yellow") {
  text = "Watch! Be Careful.";
} else if (trafficLightColour == "Green") {
  text = "Go!!!!!";
} else {
  // Fallback Scenario
  text = "Not a valid colour!";
}

console.log(text);
