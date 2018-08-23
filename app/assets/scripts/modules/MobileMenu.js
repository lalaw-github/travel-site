import $ from 'jquery';

class MobileMenu {
	
	constructor() {
				
		//DOM selection
		this.menuIcon = $('.site-header__menu-icon');
		this.menuContent = $('.site-header__menu-content');
		this.siteHeader = $('.site-header');
		
		//call events()
		this.events();
		
	}//constructor
		
	//Event handling
	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	//Define functionality
	toggleTheMenu() {
		this.menuContent.toggleClass('site-header__menu-content--is-visible');
		this.siteHeader.toggleClass('site-header--is-expanded');
		this.menuIcon.toggleClass('site-header__menu-icon--close-x');
	}



	
	
	//test functionality
	//alert('testing from mobile menu');

	//when button is clicked
	/*OLD Spagetti code:
		$('.site-header__menu-icon').click(function() {
		console.log('button working');
	});*/
		
}//class

export default MobileMenu;