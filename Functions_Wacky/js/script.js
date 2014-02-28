// Functions - Wacky: How Many Bricks High, Rapunzel?
// Christina Thorpe
// February 26, 2014

// Here's a puzzle, to make your puzzler sore:
var puzzledRapunzel = alert("HOW MANY BRICKS HIGH, RAPUNZEL?\xBF?\xBF?\xBF?\xBF?\xBF?\xBF? \rV   -------------------------------------\r))   Guess how many tower bricks tall is equal to \r((   Rapunzel's 70 ft mane. If each brick is 12 in \r))   wide and their height is 2/3 of their width. \r((   How many tower bricks tall would equal the \r))   length of her beautiful golden locks of hair?   \ro   -------------------------------------\rS   Come'on... take a guess!!!\xA1!\xA1!\xA1!\xA1!\xA1!\xA1!\xA1!\xA1!\xA1!\xA1!\xA1!\xA1!\xA1!\xA1");

// Create constant variables
var RapunzelsFeet = 70;
var inchesPerFeet = 12;
var brickLength = 12;
var brickHeight = .66666667;

// Create function to hold calc parameters
function brickCalc(param1, param2, param3, param4){
    var bricksStacked = RapunzelsFeet * inchesPerFeet / (brickLength * brickHeight);
// Create return to send calc outside of func for output
    return bricksStacked;
}

// Calling the function out
var bricksStacked = brickCalc;

