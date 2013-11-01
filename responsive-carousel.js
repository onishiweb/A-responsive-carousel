function responsiveCarousel (args) {
	resetCarousel(args.carousel, args.items);

	var visible = args.visible || 1,
		carousel = args.carousel,
		$carousel = $(carousel),
		controls = args.controls,
		items = '.' + args.items,
		carouselItems = $carousel.children(items).length;

	$(controls + ' .control-left').hide();

	if( carouselItems <= visible ) {
		$(controls + ' .control-right').hide();
		return false;
	}

	var	margin = 0,
		panels = Math.ceil(carouselItems / visible),
		count = 0,
		panelClass = 1,
		panelWidth = 0;

	// Reset carousel margin
	$carousel.css({'margin-left':margin});

	if( $carousel.parent('.carousel-container').length < 1 ) {
		$carousel.wrap('<div id="' + carousel.replace('.','') + '" class="carousel-container" />');
	}

	if( $carousel.children('.carousel-panel').length > 0 ) {
		$(items).unwrap();
	}

	$carousel.find(items).each( function () {
		if( count < visible ) {
			count++;
		} else {
			count = 1;
			panelClass++;
		}

		$(this).addClass( 'p'+panelClass );
	});

	for(var i=1; i<=panelClass; i++) {
		$(items+'.p'+i).wrapAll('<div class="carousel-panel" />');
	}

	$carousel.css({'width':(panels*100)+"%"});

	panelWidth = (100 / panels);

	$carousel.find('.carousel-panel').width( panelWidth+"%" );

	// CONTROLS
	var curPanel = 1,
		panelCount = $carousel.children('.carousel-panel').length;

	$(controls + ' .control-right').show();

	$(controls).on('click', '.control-right', function (e) {
		e.preventDefault();

		var $this = $(this);

		$(controls + ' .control-left').show();


		if( curPanel < panelCount ) {
			margin +=100;
			curPanel++;

			$carousel.stop().animate({'margin-left':-margin+'%'}, 800, function () {
				if(curPanel === panelCount) {
					$this.hide();
				}
			});
		}

	});

	$(controls).on('click', '.control-left', function (e) {
		e.preventDefault();

		var $this = $(this);

		$(controls + ' .control-right').show();

		if( curPanel > 1 ) {
			margin -=100;
			curPanel--;

			$carousel.stop().animate({'margin-left':-margin+'%'}, 800, function () {
				if(curPanel == 1) {
					$this.hide();
				}
			});
		}
	});
};

function resetCarousel (carousel, items) {
	if( $(carousel).parent('.carousel-container').length ) {
		$(carousel).unwrap();
	}

	if( $(carousel).children('.carousel-panel').length > 0 ) {
		$('.'+items).removeClass().addClass(items).unwrap();
	}

	$(carousel).width("100%").css({'margin-left':0});
};
