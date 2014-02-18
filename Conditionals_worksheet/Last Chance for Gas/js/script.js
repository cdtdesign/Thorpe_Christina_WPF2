// Last Chance for Gas
// Christina Thorpe
// February 17, 2014


// List variables
var mpg = 30;
var gasCapacity = 15;

// Prompt for user to input remaining percentage of gas
var percentGas = Number(prompt("Percentage of gas left in tank?", 50)) * .01;

var totalGas = gasCapacity * percentGas;

// List conditional for having more than 46% tank full of gasoline
if(percentGas > .46){
    console.log("Yes, you can make it without stopping for gas!");
}
// List conditional for having 45% or less tank full of gasoline
if(percentGas <= .45){
    console.log("You only have " + totalGas + " gallons of gas in your tank, better get gas now while you can!");
}