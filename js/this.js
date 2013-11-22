window.color = "red";
var o = { color: "blue" };

function sayColor(){
    alert(this.color);
}

sayColor(); //”red”
o.sayColor = sayColor;
o.sayColor(); //”blue”



window.color = "red";
var o = { color: "blue" };

function sayColor(){
    alert(this.color);
}

sayColor(); //red
sayColor.call(this); //red
sayColor.apply(window); //red
sayColor.call(o); //blue

var objectSayColor = sayColor.bind(o);
objectSayColor(); //blue