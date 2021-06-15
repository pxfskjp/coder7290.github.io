$(function() {
    $('.btn').on('click', function() {
        $('.header_menu ul').slideToggle(1000);
    })


    $(window).resize(function() {
        if ($(window).width() > 992) {
            $('.header_menu ul').removeAttr('style');
        }
    })

})

"use strict";
(function() {
    new Swiper(".review_slider", {
        slidesPerView: 1,
        loop: !0,
        navigation: { nextEl: ".review_slider-next", prevEl: ".review_slider-prev" },
        grabCursor: !0,
        breakpoints: { 999: { slidesPerView: 3 } }
    })
})();

let btn_click = document.querySelector('.slider_content_ex');
let btn_main = document.querySelector('.slider_content');

btn_click.addEventListener('click', () => btn_click.style.backgroundColor = '#5c5c5c');
btn_main.addEventListener('click', () => btn_click.style.backgroundColor = '#c1c1c1');