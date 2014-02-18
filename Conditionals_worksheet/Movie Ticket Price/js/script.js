// Movie Ticket Price
// Christina Thorpe
// February 17, 2014


// List constants
var regTicket = "$12";
var discountTicket = "$7";

// List variables
var customerAge = Number(prompt("Enter age of customer:"));
var movieTime = Number(prompt("Enter time of movie:"));

// List conditions for children & senior patrons
if((customerAge > 0 && customerAge < 10) || (customerAge >= 55))
{
    console.log("The ticket price is " + discountTicket)
}
// List condition for movie matinee
if(!(movieTime >= 3 && movieTime <= 5))
{
    console.log("The ticket price is " + regTicket);
}else{
    console.log("The ticket price is " + discountTicket)
}