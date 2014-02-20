// Conditionals - Industry
// Christina Thorpe
// February 18, 2014


// Variable of rates for various design projects
var graphicDesignRate = 65; // Print design hourly rate
var webDesignRate = 75; // Web design hourly rate
var logoFlatRate = 500; // Logo design flat rate

// Prompt asking how many hours of graphic design this month
var graphicHours = parseInt(prompt("Enter print design hours this month: \n(avg is 80-100 hrs)"));

// "else if" Validation prompt for graphic design hours
var graphicHrsAgain;
// Logical & relational operators used here
if(graphicHours == "" || graphicHours <= 69){
    graphicHrsAgain = Number(prompt("Wait! Check amount of hours! \nShould be between:", 70 + "-" + 130))
}else if(graphicHours >= 131){ // Relational operator used here
    graphicHrsAgain = Number(prompt("Wait! Check amount of hours! \nShould be no more than:", 130 + " hours or less."))
}else{

}

// Prompt asking how many hours of web design this month
var webHours = parseInt(prompt("Enter web design hours this month: \n(avg is 60-80 hrs)"));

// "else if" Validation prompt for web design hours
var webHrsAgain;
// Logical & relational operators used here
if(webHours == "" || webHours <= 49){
    webHrsAgain = Number(prompt("Wait! Check amount of hours! \nShould be between:", 50 + "-" + 90))
}else if(webHours >= 91){ // Relational operator used here
    webHrsAgain = Number(prompt("Wait! Check amount of hours! \nShould be no more than:", 90 + " hours or less."))
}else{

}

// Prompt asking how many logo projects this month
var logoProjects = parseInt(prompt("Enter logo projects this month:"));

// calculate result variables
var graphicDesign$$$ = graphicDesignRate * graphicHours;
var webDesign$$$ = webDesignRate * webHours;
var logoDesign$$$ = logoFlatRate * logoProjects;

// Result strings
var graphicString = "Total income from graphic design this month is $ " + graphicDesign$$$;
var webString = "\nTotal income from web design this month is $ " + webDesign$$$;
var logoString = "\nTotal income from logo design this month is $ " + logoDesign$$$;

console.log(graphicString + webString + logoString);
