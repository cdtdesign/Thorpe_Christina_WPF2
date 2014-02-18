// Check the Login
// Christina Thorpe
// February 17, 2014


// Correct username and password
var userName = "FullSail";
var userPass = "fullsail1979";
var encryptName = "********";
var encryptPass = "********";

// Create alert statement that provides user with username and password
var userLogin = alert("Username is: " + userName + "\nPassword is: " + userPass + "\nBoth are case-sensative.");

// Prompt user for login
var usernameEntry = prompt("Enter username: ", encryptName);
var userpassEntry = prompt("Enter password: ", encryptPass);

// Conditions for user login
if(usernameEntry != userName){
// Result of incorrect username
    console.log("User not found.");
}else if(userpassEntry != userPass){
// Result of incorrect password
    console.log("Password does NOT match our records.");
}else{
// Result of correctly entered login
    console.log("Welcome, FullSail!");
}