/*
 * STARTING HTML:
 *
 * 	<ul class="carousel">
 * 		<li class="item"><img src="http://placekitten.com/g/1000/300/"></li>
 * 		<li class="item"><img src="http://placekitten.com/g/1000/300/"></li>
 * 		<li class="item"><img src="http://placekitten.com/g/1000/300/"></li>
 * 		<li class="item"><img src="http://placekitten.com/g/1000/300/"></li>
 *  </ul>
 */

function carouselInit() {
	// Get the carousel class and items
	var $carousel = $('.carousel'),
		items = $carousel.find('li');

	// If there are items, make a carousel
	if(items.length) {
		$carousel.css({
			'overflow':'hidden'
		})
		// Add the controls
		.append('<div class="controls"><a href="#right" class="control-right">Right</a><a href="#left" class="control-left">Left</a></div>');

		// Set up the carousel
		responsiveCarousel({
			carousel:'.carousel',
			controls:'.controls',
			visible:1,
			items:'item'
		});
	}
}
