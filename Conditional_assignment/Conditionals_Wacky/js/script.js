// Conditionals - Wacky: Three Little Piggys
// Christina Thorpe
// February 18, 2014


// Living in the last standing house made of brick, one day the three little piggys went out for some items. How many items did they successfully bring back home?

// Number of items piggy #1 got
var firstPiggysStuff = parseInt(prompt("PIGGY #1: How many of the 6 eggs did the big bad wolf take from the first little piggy on his way home from the market?"));

// Number of items piggy #2 got
var secondPiggysStuff = parseInt(prompt("PIGGY #2: \nHow many of the 3 lattes did the big bad wolf take from the second little piggy on his way home from Starbucks?"));

// Number of items piggy #3 got
var thirdPiggysStuff = parseInt(prompt("PIGGY #3: \nHow many of the 6 flowers did the big bad wolf take from the third little piggy pick on his way home from the park?"));

var bigBadWolf;

// Big Bad Wolf stops piggys #1 and #3 to take some of their items
if(firstPiggysStuff == "" || firstPiggysStuff >= 7){
    firstPiggysStuff = parseInt(prompt("PIGGY #1: How many of the 6 eggs did the big bad wolf take from the first little piggy on his way home from the market?"));

// First little piggy result variable
var firstLittlePiggy = "The first little piggy lost " + firstPiggysStuff + " eggs to the big bad wolf.";

// Print result of first little piggy
}else if(firstPiggysStuff <= 6 - 1){
    console.log(firstLittlePiggy);
}