var color = "blue";
function changeColor(){
    var anotherColor = "red";
    function swapColors(){
        var tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;
        //color, anotherColor, and tempColor are all accessible here
        alert("color : " + color + ", tempColor : " + tempColor +  ",  anotherColor : " + anotherColor);
    }
    //color and anotherColor are accessible here, but not tempColor
    swapColors();
}
//only color is accessible here
var a =new changeColor();
