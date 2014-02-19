// Conditionals - Personal: Bike or Drive Christian to School?
// Christina Thorpe
// February 18, 2014


// Miles from our house to Christian's school and back
var schoolDistance = .8 * 4; // 3.2 miles per day
// Travel time from hour house to Christian's school and back, driving and biking
var driveTime = 5 * 4; // 20 minutes per day
var bikeTime = 15 * 4; // 60 minutes per day
// Prompt for weather forecast of sunny vs. rainy school days---determining factor of biking vs. driving
var sunnyDays = prompt("How many sunny days in this week's forecast? ", 3);
var rainyDays = prompt("How many rainy days in this week's forecast? ", 2);

// Minutes of cardio vs. mileage for the school week
if(sunnyDays >= 3){
// Minutes of cardio biked in a school week
    console.log("If there are " + sunnyDays + " sunny days this week, a total of " + bikeTime * sunnyDays + " minutes of cardio will have been biked to school and only " + schoolDistance * rainyDays + " miles will have been driven.");
}else{
//Mileage driven in a school week
    console.log("If there are " + rainyDays + " rainy days this week, a total of " + schoolDistance * rainyDays + " miles will have been driven to school and only " + bikeTime * sunnyDays + " minutes of cardio biked.");
}