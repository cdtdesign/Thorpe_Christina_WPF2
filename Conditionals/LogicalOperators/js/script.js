// Logical Operators

// And && - Requires both in the pair to be TRUE for the whole pair to be TRUE.
// Or || - Requires at leaast ONE of the pair to be TRUE got yhr eholr pair to bo TRUE.
// Exclusive or (XOR) ^
// Not !

var budget = 300;
var iPhonePrice = 199.99;
var paycheck = 200;

// If the price of the phone is less our budget AND if our paycheck is over 300
if(iPhonePrice < budget && paycheck > 300){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!!");
}