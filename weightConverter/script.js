// document.getElementById("output").style.visibility = "hidden";
// document.getElementById("lbsInput").addEventListener("input", function (event) {
//   document.getElementById("output").style.visibility = "visible";
//   let lbs = event.target.value;
//   document.getElementById("gramsOutput").innerHTML = lbs / 0.0022046;

// });
// document.getElementById("lbsInput").addEventListener("input", function (event) {
//   document.getElementById("kgOutput").style.visibility = "visible";
//   let lbs = event.target.value;
//   document.getElementById("kgOutput").innerHTML = lbs / 2.205;
// });

// document.getElementById("lbsInput").addEventListener("input", function (event) {
//   document.getElementById("ozOutput").style.visibility = "visible";
//   let lbs = event.target.value;
//   document.getElementById("ozOutput").innerHTML = lbs * 16;
// });

document.getElementById("output").style.visibility = "hidden";
document.getElementById("lbsInput").addEventListener("input", function (event) {
  document.getElementById("output").style.visibility = "visible";
  document.getElementById("kgOutput").style.visibility = "visible";
  document.getElementById("ozOutput").style.visibility = "visible";
  let lbs = event.target.value;
  document.getElementById("gramsOutput").innerHTML = lbs / 0.0022046;
  document.getElementById("kgOutput").innerHTML = lbs / 2.205;
  document.getElementById("ozOutput").innerHTML = lbs * 16;
});

// Create a new Markov Chain
// By default, its type is text
var markov = new Markov();

// Add some states
markov.addStates([
  "Today is sunny",
  "Today is rainy",
  "The weather is sunny",
  "The weather for today is sunny",
  "The weather for tomorrow might be rainy",
]);

// Train the Markov Chain
markov.train();

// Generate an output
markov.generateRandom();
