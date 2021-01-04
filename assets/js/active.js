$(document).ready(function(){
    $('.full-thumb-slides,.blog-slides').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        autoplay: false,
    });
    $('#mobile-menu').slicknav();
});