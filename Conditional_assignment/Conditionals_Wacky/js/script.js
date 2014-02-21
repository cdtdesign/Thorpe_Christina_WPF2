// Conditionals - Wacky: Three Little Piggys on the Move!
// Christina Thorpe
// February 18, 2014


// Living in the last standing house made of brick, one day the three little piggys went out for some items. How many items did they successfully bring back home?

// Number of items piggy #1 had taken by the wolf
var firstPiggysStuff = Number(prompt("PIGGY #1 GOES TO THE MARKET: How many of the 6 eggs bought did the big bad wolf take?"));

// First little piggy result variable
var firstLittlePiggy = "The first little piggy lost " + firstPiggysStuff + " egg(s) to the big bad wolf.";

// Big Bad Wolf stops piggy #1 to take some of his stuff
if(firstPiggysStuff == ""){
var firstPiggyNada = Number(prompt("Come'on... everyone knows the wolf ALWAYS takes something. Please enter how many of the 6 eggs were taken."));

// Big bad wolf result variable
var bigBadWolfA = "The first little piggy lost " + firstPiggyNada + " egg(s) to the big bad wolf.";

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
var secondLittlePiggy = "The second little piggy lost " + secondPiggysStuff + " latte(s) to the big bad wolf.";

// Big Bad Wolf stops piggy #2 to take some of his stuff
if(secondPiggysStuff != ""){
var secondPiggyNada = Number(prompt("Come'on... everyone knows the wolf ALWAYS takes something. Please enter how many lattes were taken."));

// Big bad wolf result variable
var bigBadWolfB = "The second little piggy lost " + secondPiggyNada + " latte(s) to the big bad wolf.";

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