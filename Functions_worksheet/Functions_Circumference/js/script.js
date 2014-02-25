// Functions - Circumference
// Christina Thorpe
// February 25, 2014


// Calculate the circumference of a circle

// Declare variables
var radius1 = 5
var radius2 = 6
var radius3 = 7

// Result variable that defines argument
var circleTotal = calcCircum(radius3);

// Function container with parameters (C = 2∏r)
function calcCircum(radius){
// Calculation variable
    var circleCircum = 2 * 3.14 * radius
    return circleCircum; // needs to be stored outside the function
}
// Print function to the console
console.log("The circumference of the circle is " + circleTotal + ".");