// Slice of Pie - Part 2
// Christina Thorpe
// February 11, 2014

// List variables
var numSlices = 10;
var numPizzas = 5;
var numStudents = 20;

// Calculate slices of pizza leftover for Sparky
var numLeftover = "Sparky got " + numPizzas * numSlices % numStudents + " slices of pizza.";

// Print statement to console
console.log(numLeftover);