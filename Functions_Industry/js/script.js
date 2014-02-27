// Functions - Industry: Monthly Business Data Services
// Christina Thorpe
// February 26, 2014

// Calculate business data services cost for a given number of months

// Monthly business data services costs

// Add prompt that contribute number of years to end calc
/*
var amountOfTime = prompt("Enter number of months: ");
*/

// Create function container with parameters
var total = function(service1, service2, service3, months){
    var calc = (service1 + service2 + service3) * months;
// Return statement to send info outside of function for output
    return calc;
}
// Add month variable to function
var months3 = 3;
var months6 = 6;
var months9 = 9;
var months12 = 12;

// Arguments for function calc
var c = total(10, 12, 20, months6);
var string1 = "Monthly business data services total $";
var string2 = " over three months.";
var string3 = " over six months.";
var string4 = " over nine months.";

// 1st conditional statement for 3 months of service
if(c === 126){
    console.log(string1 + c + string2);
}
// 2nd conditional statement for 6 mos of service
if(c === 252){
    console.log(string1 + c + string3);
}
// 3rd conditional statement for 9 mos of service
if(c === 378){
    console.log(string1 + c + string4);
}