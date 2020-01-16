


$(function(){

    $('.header__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,


        infinite: true,
        fade: true,
        prevArrow:'<img class="slider-arrows slider-arrows__left" src="img/arrow-left.png" alt="">',
        nextArrow:'<img class="slider-arrows slider-arrows__right" src="img/arrow-right.png" alt="">',
        //asNavFor: '.slider-dots',
    })

    $('.header__slider__products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,


        infinite: true,
        fade: true,
        prevArrow:'<img class="slider-arrows slider-arrows__left" src="img/arrow-left.png" alt="">',
        nextArrow:'<img class="slider-arrows slider-arrows__right" src="img/arrow-right.png" alt="">',
        //asNavFor: '.slider-dots',
    })

    // $('.slider-dots').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     asNavFor: '.header__slider',
    // });
 
});