// this is a reference to the context "object" that the function is operating on

window.color = "red";
var o = { color: "blue" };

function sayColor(){
    alert(this.color);
}

sayColor(); //”red”
o.sayColor = sayColor;
o.sayColor(); //”blue”
/*
Remember that function names are simply variables containing pointers, so the
global sayColor() function and o.sayColor() point to the same function even
though they execute in different contexts.
*/


// Functions are objects and have properties - length and prototype, and methods - apply(), call()
window.color = "red";
var o = { color: "blue" };

function sayColor(){
    alert(this.color);
}

sayColor(); //red 
sayColor.call(this); //red     - use call when to pass arguments in manually
sayColor.apply(window); //red  - use apply when have array or to pass arguments object in
sayColor.call(o); //blue

var objectSayColor = sayColor.bind(o);  //The bind() method creates a new function instance whose this value is bound to the value that was passed into bind().
objectSayColor(); //blue