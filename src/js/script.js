import $ from 'jquery';
import slick from 'slick-carousel';

$(window).on('load', () => {
	burger();
	slider();
});

function __actionBurger(btn, action) {
	$(`.btn--${btn}`).click(e => {
		e.preventDefault();

		btn == 'close' ? $(".input--burger").val('') : false;
		$(".burger")[action]("burger--active");
		$(".background")[action]("background--active");
	});
}

function burger() {
	__actionBurger('burger', 'addClass');
	__actionBurger('close', 'removeClass');
}

function slider() {
	const breakPoint = 1024;

	$(".slider__arrow").click(e => e.preventDefault());

	$("#mainSlider").slick({
		speed: 1200,
		slidesToShow: 1,
		easing: 'ease-in',
		appendArrows: '.slider__control',
		prevArrow: '.slider__arrow--prev',
		nextArrow: '.slider__arrow--next',
		responsive: [
			{
				breakpoint: breakPoint,
				settings: {
					slidesToShow: 1,
					dots: true
				}
			}
		]
	});
}
