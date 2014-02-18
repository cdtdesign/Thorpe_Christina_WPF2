// Check the Login
// Christina Thorpe
// February 17, 2014


// Create alert statement that provides user with username and password
var userLogin = alert("Username is: " + userName + "\nPassword is: " + userPass + "\nBoth are case-sensative.");

// Correct username and password
var userName = "FullSail";
var userPass = "fullsail1979";
var encryptName = "********";
var encryptPass = "********";

// Prompt user for login
var usernameEntry = prompt("Enter username: ", encryptName);
var userpassEntry = prompt("Enter password: ", encryptPass);

// Conditions for user login
if(usernameEntry = userName && userpassEntry = userPass){
// Result of correctly entered login
    console.log("Welcome, FullSail!");
