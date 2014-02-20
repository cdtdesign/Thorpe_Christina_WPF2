// Conditionals - Industry
// Christina Thorpe
// February 18, 2014


// Variable of rates for various design projects
var graphicDesignRate = 65; // Print design hourly rate
var webDesignRate = 75; // Web design hourly rate
var logoFlatRate = 500; // Logo design flat rate

// Prompt asking how many hours of graphic design this month
var graphicHours = Number(prompt("Enter print design hours this month \n(avg is 80-100 hrs)"));

// "else if" Validation prompt for graphic hours
var graphicHrsAgain;
if(graphicHours == "" || graphicHours <= 69){
    graphicHrsAgain = Number(prompt("Wait! Check amount of hours! \nShould be between:", 70 + "-" + 130))
}else if(graphicHours >= 131){
    graphicHrsAgain = Number(prompt("Wait! Check amount of hours! \nShould be no more than:", 130 + " hours or less."))
}else{

}
// Prompt asking how many hours of web design this month
var webHours = Number(prompt("Enter web design hours this month:"));
// Prompt asking how many logo projects this month
var logoProjects = Number(prompt("Enter logo projects this month:"));



