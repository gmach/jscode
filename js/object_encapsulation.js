function testObject(param) {
    // Public members
    this.publicVariable = param;
    this.privilegedMethod = function () {
        return privateMethod();
    };
    // Private members
    // Note: param is also private
    var privateVariable = 'password';
    function privateMethod() {
        return privateVariable;
    };

}

var testObj = new testObject('somevalue');  
console.log(testObj.publicVariable);        // Returns somevalue
console.log(testObj.privilegedMethod());    // Returns password
console.log(testObj.privateVariable);       // Returns undefined
console.log(testObj.privateMethod());       // Returns error because no private method