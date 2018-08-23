import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($('.testimonial'), '60%');
new RevealOnScroll($('.feature-item'), '85%');














































/* 
//Example code section 14



var $ = require('jquery');
//node.js way of importing javascript files (require)
//var Person = require('./modules/Person');

//ecma script 6 now supports import
import Person from './modules/Person';

class Adult extends Person {
	payTaxes() {
		console.log(this.name + ' now owes £0 in taxes.');
	}
}

//alert('ABC 1234');

var john = new Person('John Doe', 'blue');
john.greet();

var jane = new Adult('Jane Smith', 'orange');
jane.greet();
jane.payTaxes();


$('h1').remove();


*/