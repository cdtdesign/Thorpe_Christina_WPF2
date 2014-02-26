// Functions - Industry: Monthly Business Data Services
// Christina Thorpe
// February 26, 2014

// Calculate business data services cost for a given number of months

// Monthly business data services cost variables
var dataStorageCost = 10; // Current data storage is DropBox
var projectInvCost = 12; // Current invoicing is thru Harvest
var projectMgrCost = 20; // Current project mgmt is thru Basecamp

// Add prompt variable for user to input amount of time in months
var amountOfTime = prompt("Enter number of months of service: ");

// Create function container with parameters
function calcServicesTot(cost){
// Calculating variable
    var calcServicesTot = cost * amountOfTime
// Return statement to send info outside of function for output
    return calcServicesTot;
}