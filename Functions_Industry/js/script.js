// Functions - Industry: Monthly Business Data Services
// Christina Thorpe
// February 26, 2014

// Calculate business data services cost for a given number of months

// Monthly business data services costs

// Add prompt that contribute number of years to end calc
/*
var amountOfTime = prompt("Enter number of years: ");
*/

// Create function container with parameters
var total = function(service1, service2, service3, months){
    var calc = (service1 + service2 + service3) * months;
// Return statement to send info outside of function for output
    return calc;
}

var c = total(10, 12, 20, 6)
console.log(c);
