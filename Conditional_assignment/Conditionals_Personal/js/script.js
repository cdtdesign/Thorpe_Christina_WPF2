// Conditionals - Personal: Bike or Drive Christian to School?
// Christina Thorpe
// February 18, 2014


// Miles from our house to Christian's school and back
var schoolDistance = .8 * 4; // 3.2 miles per day
// Travel time from hour house to Christian's school and back, driving and biking
var driveTime = 5 * 4; // 20 minutes per day
var bikeTime = 15 * 4; // 60 minutes per day
// Prompt for weather forecast of sunny school days---determining factor of biking vs. driving to school
var sunnyDays = prompt("How many sunny school days in this week's forecast?");

// Variable for sunnyDays left blank
var blanksunnyDays = "";

// Prompt validation
if(sunnyDays == blanksunnyDays){
    alert("Whoahhh!! Please enter 0-5 sunny school days!");
    sunnyDays = prompt("How many sunny school days in this week's forecast?");
}
//Prompt for weather forecast of rainy school days---determining factor of biking vs. driving to school
var rainyDays = Number(prompt("How many rainy school days in this week's forecast?", 5 - sunnyDays));

// Result variables
var bikeDays = "Fortunately, there will be " + sunnyDays + " favorable weather days this week, allowing " + bikeTime * sunnyDays + " minutes of cardio from biking to school and only " + schoolDistance * rainyDays + " miles to be driven.";

var driveDays = "Unfortunately, there will be " + rainyDays + " unfavorable weather days this week, causing a total of " + schoolDistance * rainyDays + " miles to be driven to school and only " + bikeTime * sunnyDays + " minutes of cardio to be biked.";

// Ternary Statement: Minutes of cardio vs. mileage for the school week
(sunnyDays >= 3) ? console.log(bikeDays) :
console.log(driveDays);