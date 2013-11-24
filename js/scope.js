var color = "blue";
function changeColor(){
    var anotherColor = "red";
    function swapColors(){
        var tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;
        //color, anotherColor, and tempColor are all accessible here
        console.log("color : " + color + ", tempColor : " + tempColor +  ",  anotherColor : " + anotherColor);
    }
    //color and anotherColor are accessible here, but not tempColor
    swapColors();
}
//only color is accessible here
var a =new changeColor();



//private scope created with IIFE
function outputNumbers(count){
    (function () {
        for (var i=0; i < count; i++){
            alert(i);
        }
    })();
    alert(i); //causes an error
}

/* Note it is :
    (function(){
    //block code here
    })();

and NOT :
    function(){    
    //block code here
    }();
*/

var name = "Richard";

function showName () {
    var name = "Jack"; // local variable; only accessible in this showName function
    console.log (name); // Jack
    console.log(this.name); // this if called from global context like below will equal Richard
}
console.log (name); // Richard: the global variable
showName();   


// The use of the "this" object inside the setTimeout function refers to the Window object, not to myObj

var highValue = 200;
var constantVal = 2;
var myObj = {
    highValue: 20,
    constantVal: 5,
    calculateIt: function () {
        var that = this;
        setTimeout (function  () {
            console.log("With this : " + this.constantVal * this.highValue); // 400
            console.log("With that : " + that.constantVal * that.highValue); // 100
        }, 2000);
    }
}

// The "this" object in the setTimeout function used the global highValue and constantVal variables, because the reference to "this" in the setTimeout function refers to the global window object, not to the myObj object as we might expect.

myObj.calculateIt(); // 400  100

