// Conditionals - Personal: Bike or Drive Christian to School?
// Christina Thorpe
// February 18, 2014


// Miles from our house to Christian's school and back
var schoolDistance = .8 * 4; // 3.2 miles per day
// Travel time from hour house to Christian's school and back, driving and biking
var driveTime = 5 * 4; // 20 minutes per day
var bikeTime = 15 * 4; // 60 minutes per day
// Prompt for weather forecast of sunny vs. rainy school days---determining factor of biking vs. driving
var sunnyDays = prompt("How many sunny school days in this week's forecast?");

// Variable for sunnyDays left blank
var blanksunnyDays = "";

// Prompt validation
if(sunnyDays == blanksunnyDays){
    alert("Whoahhh!! Please enter 0-5 sunny school days!")
    sunnyDays = prompt("How many sunny school days in this week's forecast?");
}

var rainyDays = Number(prompt("How many rainy school days in this week's forecast?", 5 - sunnyDays));

// Result variables
var bikeDays = "If there are " + sunnyDays + " sunny days this week, a total of " + bikeTime * sunnyDays + " minutes of cardio will have been biked to school and " + schoolDistance * rainyDays + " miles will have been driven.";

var driveDays = "If there are " + rainyDays + " rainy days this week, a total of " + schoolDistance * rainyDays + " miles will have been driven to school and " + bikeTime * sunnyDays + " minutes of cardio biked.";

// Minutes of cardio vs. mileage for the school week
if(sunnyDays >= 3){
// Minutes of cardio biked in a school week
    console.log(bikeDays);
}else{
//Mileage driven in a school week
    console.log(driveDays);
}