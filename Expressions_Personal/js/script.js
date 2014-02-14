// Expressions_Personal - Christian's School Night Activities Schedule
// Christina Thorpe
// February 13, 2014


// Assign variable and prompt for Christian's homework activity on school nights
var homewrkHours = prompt("Enter number of hours Christian does homework each school night:", 1.5);
// Assign variable and prompt for Christian's reading activity on school nights
var readingHours = prompt("Enter number of hours Christian reads each school night:", 1);
// Assign variable and prompt for Christian's gaming activity on school nights
var gamingHours = prompt("Enter number of hours Christian games each school night:", 1);


// Calculate 4 week totals of Christian's homework activity on school nights
var homewrkTotal = homewrkHours * 5 * 4;
// Calculate 4 week totals of Christian's reading activity on school nights
var readingTotal = readingHours * 5 * 4;
// Calculate 4 week totals of Christian's gaming activity on school nights
var gamingTotal = gamingHours * 5 * 4;


// Create homework string variable
var homewrkString = "The amount of homework Christian completes in four weeks is ";
// Create reading string variable
var readingString = "The amount of reading Christian completes in four weeks is ";
var gamingString = "The amount of gaming Christian plays in four weeks is ";


var activitiesTotal = homewrkString + homewrkTotal + " hours. " +  readingString + readingTotal + " hours. " + gamingString + gamingTotal + " hours.";

console.log(activitiesTotal);
