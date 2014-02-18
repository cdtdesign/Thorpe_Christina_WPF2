// Movie Ticket Price
// Christina Thorpe
// February 17, 2014


// List constants
var regTicket = "$12";
var discountTicket = "$7";

// List variables
var customerAge = Number(prompt("Enter age of customer:"));
var movieTime = Number(prompt("Enter time of movie:"));

// List conditions for children/senior patrons & movie matinee
if((customerAge > 0 && customerAge < 10) || (customerAge >= 55))
{
// Code for discounted child/senior movie ticket
    console.log("The ticket price is " + discountTicket)
}else if (movieTime >= 3 && movieTime <= 5){
// Code for discounted movie matinee ticket
    console.log("The ticket price is " + discountTicket)
}else{
// Code for non-discounted ticket
    console.log("The ticket price is " + regTicket);
}
