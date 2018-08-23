/* 
Old way of importing javascript files using node.js support:
Babel converts ES6 into ES5 for us

this is an old way of writing constructor objects

see below the new version and syntact support (class / constructor)



function Person(fullName, color) {
	
	this.name = fullName;
	this.color = color;
	this.greet = function() {
		console.log('hello, my name is ' + this.name + ' and my favourite color is ' + this.color + '.');
	}
	
}

module.exports = Person;
*/


//Example code section 14


class Person {
	
	constructor(fullName, color) {
		this.name = fullName;
		this.color = color;
	}
	
	
	greet() {
		console.log('Yo mofo, my name is ' + this.name + ' and my favourite color is ' + this.color + '.');
	}
	
}

//node.js way of exporting javascript files
//module.exports = Person;

//ecma script 6 now supports export directly 
export default Person;