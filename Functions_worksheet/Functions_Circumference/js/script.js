// Functions - Circumference
// Christina Thorpe
// February 25, 2014


// Calculate the circumference of a circle

// Define arguments
circleCircum(radius1);
circleCircum(radius2);
circleCircum(radius3);

// Function container with parameters
function circleCircum(radius){ // Parameter: C = 2∏r
    var circleCircum = 2 * 3.14 * radius
    // Print function to the console
    return circleCircum; // needs to be stored outside the function
}

// Declare variables
var radius1 = 5
var radius2 = 6
var radius3 = 7


console.log("The circumference of the circle is " + circleCircum + " inches.")
