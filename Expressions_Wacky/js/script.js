// Expressions_Wacky - There IS Life on Mars!!!
// Christina Thorpe
// February 13, 2014


// Enter variables of Martian population
//var purpleMartians = 400
//var orangeMartians = 800
//var greenMartians = 1000


// Create alert that tells the number of total Martian population
var martianPop = alert("The total number of Martians on the planet Mars is 2,200.");
// Variable representing total Martian population on Mars
var totalMartians = 2200;


// Create prompt that asks users count of purple Martians on the planet
var purpleMartians = prompt("How many purple Martians do you count on the planet? ", 400);
// Create prompt that asks users count of green Martians on the planet
var greenMartians = prompt("How many green Martians do you count on the planet? ", 1000);


// Create parse variable
var martianInt1;
// Create parse integer that subtracts the number of purple and green Martians from the total Martian population to reveal the number of orange Martians on the planet
martianInt1 = parseInt(totalMartians - purpleMartians - greenMartians);
var martianCount = alert("According to your count, there are " + martianInt1 + " orange Martians on the planet.");


// Concatenate first string for resulting statement
var martianString1 = "The number of purple inhabitants living on Mars is " + purpleMartians + ". The number of green inhabitants is " + greenMartians + " and the number of orange inhabitants is " + martianInt1 + ". " + "The total number of inhabitants on the red planet is " + totalMartians + ". Fortunately, Martians are color blind, so they are all one and the same to one another!";



// Assignment operator calculates the Martian craters
var martianCrater = 30;
martianCrater -= 10;


// Print result in console
console.log(martianString1 + " The purple Martians live in " + martianCrater + " of the 30 craters on the red planet.");