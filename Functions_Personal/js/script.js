// Functions - Personal: Wake Up Call!!
// Christina Thorpe
// February 26, 2014


// Calculate number of hours slept

// Prompt variables for sleep time
var sleepStart = prompt("Time fell asleep? ", 11);
var sleepAMPM1 = prompt("AM or PM?", "PM");
// Prompt variables for wake up time
var sleepEnd = prompt("Time woken up?", 6);
var sleepAMPM2 = prompt("AM or PM?", "AM");

// Create conditional for AM selection on Sleep Start
if(sleepAMPM1 === "AM" || sleepAMPM1 === "am"){  // Logical operator included
    var timeAsleep = (parseInt(sleepStart) + 12);

// Conditional for PM selection on Sleep Start
}
if(sleepAMPM1 === "PM" || sleepAMPM1 === "pm"){ // Logical operator included
    var timeAsleep = (parseInt(sleepStart));
}

// Conditional for AM selection on Sleep End
if(sleepAMPM2 === "AM" || sleepAMPM2 === "am"){ // Logical operator included
    var timeAwake = (parseInt(sleepEnd) + 12);

// Conditional for PM selection on Sleep End
}
if(sleepAMPM2 === "PM" || sleepAMPM2 === "pm"){ // Logical operator included
    var timeAwake = (parseInt(sleepEnd));
}

// Create normal named function container
function hoursSlept(timeAwake,timeAsleep){
// Create return to send result to output at console
    return calcHours;
}
// Argument variables
var calcHours = timeAwake - timeAsleep;

// String variable to output result to console
var totalHoursSlept = "You slept a total of " + Math.abs(calcHours) + " hours.";

// Output to console
console.log(totalHoursSlept);
