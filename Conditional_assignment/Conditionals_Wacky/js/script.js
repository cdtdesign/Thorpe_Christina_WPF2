// Conditionals - Wacky: Three Little Piggys on the Move!
// Christina Thorpe
// February 18, 2014


// Living in the last standing house made of brick, one day the three little piggys went out for some items. How many items did they successfully bring back home?

// Number of items piggy #1 had taken by the wolf
var firstPiggysStuff = parseInt(prompt("PIGGY #1 GOES TO THE MARKET: How many of the 6 eggs bought did the big bad wolf take?"));

// First little piggy result variable
var firstLittlePiggy = 'On the way home from the market, the first little piggy lost ' + firstPiggysStuff + ' egg(s) \nto the big bad wolf, and cried "whaaaaahhhh!" all the way home.';

// Big Bad Wolf stops piggy #1 to take some of his stuff
if(firstPiggysStuff == ""){
    alert("Come'on... everyone knows the wolf ALWAYS takes something. Please enter how many of the 6 eggs were taken.");
    firstPiggysStuff = parseInt(prompt("PIGGY #1 GOES TO THE MARKET: How many of the 6 eggs bought did the big bad wolf take?", 3));

// Big bad wolf result variable
    var bigBadWolfA = 'On the way home from the market, the first little piggy lost ' + firstPiggysStuff + ' egg(s) \nto the big bad wolf, and cried "whaaaaahhhh!" all the way home.';

    console.log(bigBadWolfA);
}

// Print result of first little piggy
else if(firstPiggysStuff <= 6 - 1)
{
    console.log(firstLittlePiggy);
}
else{

}

// Number of items piggy #2 had taken by the wolf
var secondPiggysStuff = parseInt(prompt("PIGGY #2 GOES TO STARBUCKS: How many of the 3 lattes did the big bad wolf take?"));

// Second little piggy result variable
var secondLittlePiggy = '\nOn the way home from Starbucks, the second little piggy lost ' + secondPiggysStuff + ' latte(s) \nto the big bad wolf, and cried "whaaaaahhhh!" all the way home.';

// Big Bad Wolf stops piggy #2 to take some of his stuff
if(secondPiggysStuff == 0){
    alert("Come'on... everyone knows the wolf ALWAYS takes something. Please enter how many lattes were taken.");
    secondPiggysStuff = parseInt(prompt("PIGGY #2 GOES TO STARBUCKS: How many of the 3 lattes did the big bad wolf take?", 2));

// Big bad wolf result variable
    var bigBadWolfB = '\nOn the way home from Starbucks, the second little piggy lost ' + secondPiggysStuff + ' latte(s) \nto the big bad wolf, and cried "whaaaaahhhh!" all the way home.';

    console.log(bigBadWolfB);
}

// Print result of second little piggy
else if(secondPiggysStuff <= 3 - 1)
{
    console.log(secondLittlePiggy);
}
else{

}

// Number of items piggy #3 had taken by the wolf
var thirdPiggysStuff = parseInt(prompt("PIGGY #3 GOES TO THE PARK: How many of the 6 flowers picked did the big bad wolf take?"));

// Third little piggy result variable
var thirdLittlePiggy = '\nOn the way home from the park, the third little piggy lost ' + thirdPiggysStuff + ' flower(s) \nto the big bad wolf, and cried "whaaaaahhhh!" all the way home.';

// Big Bad Wolf stops piggy #3 to take some of his stuff
if(thirdPiggysStuff == 0){
    alert("Come'on... everyone knows the wolf ALWAYS takes something. Please enter how many flowers were taken.");
    parseInt(prompt("PIGGY #3 GOES TO THE PARK: How many of the 6 flowers picked did the big bad wolf take?", 3));

// Big bad wolf result variable
    var bigBadWolfC = '\nOn the way home from the park, the third little piggy lost ' + thirdPiggysStuff + ' flowers(s) \nto the big bad wolf, and cried "whaaaaahhhh!" all the way home.';

    console.log(bigBadWolfC);
}

// Print result of second little piggy
else if(thirdPiggysStuff <= 6 - 1)
{
    console.log(thirdLittlePiggy);
}
else{

}

// Total items lost to the big bad wolf
var totalPiggysStuff = firstPiggysStuff + secondPiggysStuff + thirdPiggysStuff;


console.log("\nThe three little piggys lost a total of " + totalPiggysStuff + " items to the big bad wolf. They were very sad about the stuff they lost to that MEAN, big bad old wolf, but happy to be together and safe in their brick house. THE END!");