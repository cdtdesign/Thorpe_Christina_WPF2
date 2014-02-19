// Conditionals - Personal: Bike or Drive Christian to School?
// Christina Thorpe
// February 18, 2014


// Distance from our house to Christian's school and back
var schoolDistance = .8 * 2 + " miles";
// Travel time from hour house to Christian's school and back, driving and biking
var driveTime = 5 * 2 + " minutes";
var bikeTime = 15 * 2 + " minutes";
// Prompt for weather forecast of sunny vs. rainy school days---determining factor of biking vs. driving
var sunnyDays = prompt("How many sunny days in this week's forecast? ", 3);
var rainyDays = prompt("How many rainy days in this week's forecast? ");
// Minutes of cardio vs. mileage for the school week
if(sunnyDays >= 3){
    console.log("A total of " + bikeTime * sunnyDays + " minutes of cardio will have been biked.");
}else{
    console.log("A total of " + schoolDistance * rainyDays + " miles will have been driven.");
}