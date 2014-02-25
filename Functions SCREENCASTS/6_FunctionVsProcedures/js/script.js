// Function vs Procedure


// Functions return values
// Procedures DO NOT return values


// This is a Function - it returns values
function calcArea(width, height){ // w=30, h=20
	var area = width * height;
	return area;
}


// This is a Procedure - it DOES NOT return values
function calcArea(width, height){ // w=30, h=20
	var area = width * height;
	console.log(area); // no return
}
