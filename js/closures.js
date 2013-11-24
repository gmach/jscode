// Closures are "functions" that have access to variables from another function’s scope

function createComparisonFunction(propertyName) {
    return function(object1, object2){
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value1 < value2){
            return -1;
        } else if (value1 > value2){
            return 1;
        } else {
            return 0;
        }
    };
}

var compare = createComparisonFunction("name");
var result = compare({ name: "Nicholas" }, { name: "Greg" });
console.log(result); // 1

function createFunctions(){
    var result = new Array();
    for (var i=0; i < 10; i++){
        result[i] = function(){
            return i;
        };
    }
    return result;
}

createFunctions().forEach(function (element) { console.log(element()); }); // Prints 10 ten times

function createFunctions2(){
    var result = new Array();
    for (var i=0; i < 10; i++){
        result[i] = function(num){ //start of closure
            var inside1=1;
            return function(){
                var inside2=2;
                return num;
            };
        }(i);
    }
    return result;
}
var abc=new createFunctions2();
abc.forEach(function (element) { console.log(element()); }); // Prints correct 1 2 3..10