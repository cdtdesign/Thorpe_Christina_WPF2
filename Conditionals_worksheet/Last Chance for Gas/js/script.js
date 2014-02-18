// Last Chance for Gas
// Christina Thorpe
// February 17, 2014


// List variables
var mpg = 30
var gallonGasCapacity = 15

var percentGas = Number(prompt("Percentage of gas left in tank? ")) + "%";

var totalGas = mpg * gallonGasCapacity / (percentGas * .01);

// List conditionals to find out if we can make it to the next gas station of 200 miles away
if(totalGas > 45){
    console.log("Yes, you can make it without stopping for gas!");
}

if(totalGas <= 45){
    console.log("You only have " + totalGas + " gallons of gas in your tank, better get gas now while you can!");
}
