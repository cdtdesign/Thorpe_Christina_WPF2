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
function brickCalc(f,i,l,h){
    var bricksStacked = f*i/l*h;

// Create return to send calc outside of func for output
    return bricksStacked;
}

// Calling the function out
var bricks = brickCalc(RapunzelsFeet, inchesPerFeet, brickLength, brickHeight);

// Create a prompt for users to enter their guess on the number of bricks
var puzzleGuess = prompt("Enter your guess on how many bricks tall: ");

// Contcat string for correct guess
var solidAsABrick = "You are correct! Your answer is as solid as those bricks! \nRapunzel's hair length is "+ puzzleGuess + " tower bricks tall!  \nThat's some mighty long hair and a VERY expensive haircut!!!";

// Concat string for too few bricks guessed
var shortOnBricks = "Sorry, your guess of " + puzzleGuess + " is not enough bricks. \nPlease REFRESH and try to guess again!";

// Concat string for too many bricks guessed
var tooManyBricks = "Sorry, you have guessed too many bricks at " + puzzleGuess + " bricks. \nPlease REFRESH and try to guess again!";

// Conditional for correct user guess
if(parseInt(puzzleGuess) === 70*12/8){
    console.log(solidAsABrick);
}
// Conditional for too small of a guess
if(parseInt(puzzleGuess) < 70*12/8){
    console.log(shortOnBricks);
}
// Conditional for too large of a guess
if(parseInt(puzzleGuess) > 70*12/8){
    console.log(tooManyBricks);
// Else if conditional when user leave prompt blank
}else if
    (puzzleGuess === "")
{
    console.log(alert("Please enter a guess and hit REFRESH to try again!"));
}