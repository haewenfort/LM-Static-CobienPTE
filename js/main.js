$(document).ready(function(){

    //Call swiper        
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,
        speed: 400,
        spaceBetween: 100,
        loop: true,
        autoHeight: true,
        effect: 'fade'
    });

    //Scrolldown
    $('.anchor--link').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        console.log(target);
        var pos = $(target).offset().top;
        
        $('body, html').animate({scrollTop: pos}, 1200);
    });

    $(window).on('scroll', navScroll );
})

function navScroll() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 200) {
        $('.header').addClass('fixed-top');
    } else {
        $('.header').removeClass('fixed-top');
    }
}