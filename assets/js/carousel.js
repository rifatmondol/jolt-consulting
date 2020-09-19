$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		items: 1,
		autoplay: false,
		loop: true,
		margin: 10,
		nav: true,
		dots:false,
		animateIn: 'animate__fadeIn',
		animateOut: 'animate__fadeOut',
		navText: ["<i class='fas fa-arrow-circle-left'>", "<i class='fas fa-arrow-circle-right'>"]
	})
});