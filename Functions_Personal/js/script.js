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
}
