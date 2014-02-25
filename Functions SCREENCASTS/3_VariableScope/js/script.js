// Variable Scope


var width = 5; // this width variable is scoped to the larger document


// Function definition
function outputMsg(){
	console.log("Hello World!");
}

function calcArea(){
	var width = 20;  // this width variable is scope to the function
	var height = 30;
	var area = width * height;
	console.log(area);
}

// Function invocation OR "function call" OR "calling the function"
calcArea();

// Wi