// Logical Operators

// And && - Requires both in the pair to be TRUE for the whole pair to be TRUE.
// Or || - Requires at least ONE of the pair to be TRUE for the whole pair to bo TRUE.
// Exclusive or (XOR) ^
// Not ! - Flips a value: TRUE becomes FALSE; FALSE becomes TRUE; is not used for comparison; negation

var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

// If the price of the phone is less our budget AND if our paycheck is over 300
if(iPhonePrice < budget || wonLottery){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!!");
}

