# Responsive Carousel

Fully fluid responsive carousel...

## TODO:

- Turn into jQuery plugin
- Set up more options
	- Scroll amount
	- more?
- Incorporate init function to:
	- set up controls based on settings
	- set up styling based on settings (Shouldn't need to style item widths & padding in CSS)
- Set up examples


## Usage

At the moment the JS is just set up as a single function with a few arguments, pretty poor but will be improved upon for sure. With the functions added to your JS files, you will currently need the following code set up:

### Markup

	<ul id="a-responsive-carousel">
		<li class="item"><!-- Your content here --></li>
		<li class="item"><!-- Your content here --></li>
		<li class="item"><!-- Your content here --></li>
	</ul>

	<div class="controls">
		<a href="#" class="control-right">Right</a>
		<a href="#" class="control-left">Left</a>
	</div>

### CSS

	ul {
		list-style:none;
		margin:0;
		padding:0;
	}

	li {
		float:left;
		width:50%; /* Width needs to be set depending on how many elements are visible - 50% for 2, 33.3333% for 3 etc */
		padding:0 20px; /* With border-box on, this is your spacing of elements */
	}

## JS

	responsiveCarousel({
		carousel:'#a-responsive-carousel',
		controls:'.controls', // Class selector
		visible:1,
		items:'item' // Name of class without the '.' (this will be fixed in the future - can't remember why it was set up that way)
	});
