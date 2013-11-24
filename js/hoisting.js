// Function declaration vs Function expression
// ie function myFunction() {}   vs   var myFunction = function () {};
alert(sum(10,10)); // 20
function sum(num1, num2){ // Declaration is hoisted
	return num1 + num2;
} 

/*
alert(sum2(10,10)); //errors
var sum2 = function(num1, num2){ // Expression is not so will error
	return num1 + num2;
};
*/

//All variable declarations are hoisted (lifted and declared) to the top of the current context
function showName() {
	console.log ("First Name: " + name); // undefined 
	var name = "Ford"; // declared so it is hoisted at top ie declard but not initialized at top so is undefined.
	console.log ("Last Name: " + name);
	xyz=1; // global
	console.log(xyz); //1
	this.what = "what";
	console.log(what); // what since this was global.
}

showName();

//Function Declaration Overrides Variable Declaration When Hoisted
 // Both the variable and the function are named myName
var myName;
function myName () {
	console.log ("Rich");
}

// The function declaration overrides the variable name
console.log(typeof myName); // function

// But in this example, the variable assignment overrides the function declaration
var myName2 = "Richard"; // This is the variable assignment (initialization) that overrides the function declaration.

function myName2 () {
	console.log ("Rich");
}

console.log(typeof myName2); // string 