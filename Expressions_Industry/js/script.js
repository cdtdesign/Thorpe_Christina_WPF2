// Expressions_Industry
// Christina Thorpe
// February 13, 2014

// Enter array of hours worked M-F
var workHours = [5,4,5,4,5];
// Calculate hours worked M-F
var totalWork = workHours[0] + workHours[1] + workHours[2] + workHours[3] + workHours[4];

// Enter array of lunch hours M-F
var lunchHours = [1,1,1,1,1];
// Calculate lunch hours M-F
var totalLunch = lunchHours[0] + lunchHours[1] + lunchHours[2] + lunchHours[3] + lunchHours[4];

// Enter array of hours studied M-F
var studyHours = [5,5,5,5,5];
// Calculate school hours M-F
var totalStudy = studyHours[0] + studyHours[1] + studyHours[2] + studyHours[3] + studyHours [4];


// Print total work, lunch and school hours M-F
console.log("Monday through Friday I work " + totalWork + " hours, " + "take " + totalLunch + " hours for lunch and make sure to study at least " + totalStudy + " hours for shcool.");