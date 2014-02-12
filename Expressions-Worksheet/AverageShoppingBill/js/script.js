// Average Shopping Bill
// Christina Thorpe
// February 11, 2014

// Array of the 5 weeks per class example:
var week = [20.00, 25.00, 18.00, 22.00, 28.00];

// Total spending of the 5 weeks + average:
var total = week[0] + week[1] + week[2] + week[3] + week[4];
weeklyAvg = total / 5;

// Concatenation statements + string
var totalSpent = "You have spent a total of $";
var multiWeeks = " on groceries over 5 weeks. ";
var avgSpent = "That is an average of $";
var perWeek = " per week.";

concatString = totalSpent + total + multiWeeks + avgSpent + weeklyAvg + perWeek;

console.log(concatString);
