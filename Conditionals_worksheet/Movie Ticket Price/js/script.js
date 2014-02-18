// Movie Ticket Price
// Christina Thorpe
// February 17, 2014


// List constants
var regTicket = "$12";
var discountTicket = "$7";

// List variables
var customerAge = Number(prompt("Enter age of customer:"));
var movieTime = Number(prompt("Enter time of movie:"));

// List condition for children patrons
if(customerAge > 0 && customerAge < 10){
    console.log("The ticket proce is " + discountTicket);
}

//List condition for senior patrons
if(customerAge >= 55){
    console.log("The ticket price is " + discountTicket);
}
