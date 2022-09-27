var jerseyNumber = 50;
var heading1 = document.getElementById("heading1");

if (jerseyNumber == 18) {
  heading1.innerText = "Virat Kohli";
} else if (jerseyNumber == 10) {
  heading1.innerText = "Sachin Tendulkar";
} else if (jerseyNumber == 45) {
  heading1.innerText = "Rohit Sharma";
} else {
  heading1.innerText = "Brian Lara";
}

console.log("Hello World!");
