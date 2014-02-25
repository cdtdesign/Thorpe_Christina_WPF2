// Anonymous Functions

/*
var functionName = function(){
	// code the function runs
}

functionName();
*/

var calcArea = function(width, height){ // defining fucntion
	// code the function runs
	var area = width * height;
	return area;
}

var a = calcArea(20, 30); // invoking function

console.log(a);
