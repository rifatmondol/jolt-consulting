$(document).ready(function () {
    $('.service-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots:true,
        autoplay:false,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
});