// Main Slider
const galleryTop = new Swiper('.gallery-top', {
	spaceBetween: 10,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	loop: true,
	loopedSlides: 4
});

// Pagination Slider
const galleryThumbs = new Swiper('.gallery-thumbs', {
	spaceBetween: 20,
	centeredSlides: true,
	slidesPerView: 3, // 'auto'
	touchRatio: 0.2,
	slideToClickedSlide: true,
	loop: true,
	loopedSlides: 4
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;