// Expressions_Industry
// Christina Thorpe
// February 13, 2014

// Enter prompt for preparing my son for school M-F
var schoolPrep = prompt("Enter amount of hours to prepare my son for school M-F")

// Enter array of hours worked M-F
var workHours = [5,4,5,4,5];
// Calculate hours worked M-F
var totalWork = workHours[0] + workHours[1] + workHours[2] + workHours[3] + workHours[4];


// Enter prompt for lunch hours M-F
var lunchHours = prompt("Enter amount of hours taken for lunch M-F: ",1);
// Parse integer of lunch hours M-F
var lunchInt;
lunchInt = lunchHours * 5


// Enter array of hours studied M-F
var studyHours = [5,5,5,5,5];
// Calculate school hours M-F
var totalStudy = studyHours[0] + studyHours[1] + studyHours[2] + studyHours[3] + studyHours [4];


// Print total work, lunch and school hours M-F
console.log("Monday through Friday I work " + totalWork + " hours, " + "take " + lunchInt + " hours for lunch and make sure to study at least " + totalStudy + " hours for school.");