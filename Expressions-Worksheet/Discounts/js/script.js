// Discounts
// Christina Thorpe
// February 11, 2014

// List variables
var myItem = "phone";
var orig$ = 200;
var percentOff = .5;
var sale$ = orig$ * percentOff;
var sale$Tax = .07;

// String variables, calculating discounted price with and without tax
var result = "Your " + myItem + " was originally $" + orig$ + ", but after a " + percentOff * 100 + "% discount, it is now $" + sale$ + " without tax, and $" + parseInt(sale$ * sale$Tax + sale$) + " with tax.";

// Print the resulting statement
console.log(result);
