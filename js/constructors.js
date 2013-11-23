function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function(){ // Note this is created for each instance and is not shared hence use prototype instead
		alert(this.name);
	};
}

var person = new Person("Nicholas", 29, "Software Engineer");
//use as a constructor
person.sayName(); //”Nicholas”
//call as a function
Person("Greg", 27, "Doctor"); //adds to window
window.sayName(); //”Greg”
//call in the scope of another object
var o = new Object();
Person.call(o, "Kristen", 25, "Nurse");
o.sayName(); //”Kristen”