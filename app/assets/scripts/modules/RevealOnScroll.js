import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	
	constructor(elements, offset) {
		
		this.itemsToReveal = elements;
		this.offsetPercentage = offset;
		this.hideInitially();
		this.createWaypoints();		
	}

	hideInitially() {
		this.itemsToReveal.addClass('reveal-item');
	}
	
	createWaypoints() {
		var that = this;
		this.itemsToReveal.each(function() {
			
			var currentItem = this;
			
			new Waypoint({
				
				//dom property
				element: currentItem, 
				
				//what we want it to do
				handler: function() {
					$(currentItem).addClass('reveal-item--is-visible');
				}, 
				
				//customise handler
					/*by default waypoints used top of browser as trigger to do something 0%
					by setting the offset to 100% it uses the bottom of the browser window*/
				offset: that.offsetPercentage
			});
			
		});//itemsToReveal
	}//createWaypoints
	
}//RevealOnScroll

export default RevealOnScroll;