// Conditionals - Wacky: Three Little Piggys on the Move!
// Christina Thorpe
// February 18, 2014


// Living in the last standing house made of brick, one day the three little piggys went out for some items. How many items did they successfully bring back home?

// Number of items piggy #1 had taken by the wolf
var firstPiggysStuff = Number(prompt("PIGGY #1 GOES TO THE MARKET: How many of the 6 eggs bought did the big bad wolf take?"));

// First little piggy result variable
var firstLittlePiggy = 'On the way home from the market, the first little piggy lost ' + firstPiggysStuff + ' egg(s) \nto the big bad wolf, and cried "whaaaaahhhh!" all the way home.';

// Big Bad Wolf stops piggy #1 to take some of his stuff
if(firstPiggysStuff == ""){
var firstPiggyNada = Number(prompt("Come'on... everyone knows the wolf ALWAYS takes something. Please enter how many of the 6 eggs were taken."));

// Big bad wolf result variable
var bigBadWolfA = 'On the way home from the market, the first little piggy lost ' + firstPiggyNada + ' egg(s) \nto the big bad wolf, and cried "whaaaaahhhh!" all the way home.';

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
if(secondPiggysStuff != ""){
    var secondPiggyNada = Number(prompt("Come'on... everyone knows     the wolf ALWAYS takes something. Please enter how many lattes      were taken."));

// Big bad wolf result variable
var bigBadWolfB = '\nOn the way home from Starbucks, the second     little piggy lost ' + secondPiggyNada + ' latte(s) \nto the        big bad wolf, and cried "whaaaaahhhh!" all the way home.';

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
if(thirdPiggysStuff != ""){
    var thirdPiggyNada = Number(prompt("Come'on... everyone knows the wolf ALWAYS takes something. Please enter how many flowers were taken."));

// Big bad wolf result variable
    var bigBadWolfC = '\nOn the way home from the park, the third little piggy lost ' + thirdPiggyNada + ' flowers(s) \nto the big bad wolf, and cried "whaaaaahhhh!" all the way home.';

    console.log(bigBadWolfC);
}

// Print result of second little piggy
else if(thirdPiggysStuff <= 6 - 1)
{
    console.log(thirdLittlePiggy);
}
else{

}

// Total items brought home by the three little piggys
var totalPiggysStuff = firstPiggysStuff + firstPiggyNada + secondPiggysStuff + secondPiggyNada + thirdPiggysStuff + thirdPiggyNada - 15;

