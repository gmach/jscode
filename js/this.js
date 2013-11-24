// this is a reference to the context "object" that the function is operating on

window.color = "red";
var o = { color: "blue" };

function sayColor(){
    console.log(this.color);
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
    console.log(this.color);
}

sayColor(); //red 
sayColor.call(this); //red     - use call when to pass arguments in manually
sayColor.apply(window); //red  - use apply when have array or to pass arguments object in
sayColor.call(o); //blue

var objectSayColor = sayColor.bind(o);  //The bind() method creates a new function instance whose this value is bound to the value that was passed into bind().
objectSayColor(); //blue


// Anonymous functions are not bound to an object in this context, meaning the this object points to window
var name = "The Window";
var object = {
    name : "My Object",
    getNameFunc : function(){
        var that = this;
        return function() { //this is the anonymous function and closure
            return that.name;
        };
    }
};
console.log(object.getNameFunc()()); //"My Object"


var person = {
    firstName   :"Penelope",
    lastName    :"Barrymore",
    showFullName:function () {
        // "this" on the line below refers to the person object, because the showFullName function will be invoked by person object.
        console.log (this.firstName + " " + this.lastName);
    }
}

person.showFullName (); // Peter Ally

// jQuery library binds $(this) to the object that invokes the click method. Therefore, $(this) will have the value of the jQuery button ($(“button”)). 
// If callbackmethod is defined in user object eg var user = { callbackmethod: function(){ this.abc = 123; }};
 $("button").click (callbackmethod.bind (user)); 