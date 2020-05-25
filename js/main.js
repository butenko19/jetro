$(function(){

    $('.slider__inner').slick({
        prevArrow:
        '<button class="slick-arrow slick-prev"><img src="images/prev.png" alt=""></button>',
        nextArrow:
        '<button class="slick-arrow slick-next"><img src="images/next.png" alt=""></button>',
        slidesToShow: 1,
        // slidesToScroll: 1,
        arrows: true,
        fade: true,
        centerMode: false,
        asNavFor: '.slider__mini-inner'
    });

    $('.slider__mini-inner').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.slider__inner',
      dots: false,
      arrows: false,
      centerMode: false,
      focusOnSelect: true,
      variableWidth: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
       
      ]
    });

$('.header__menu-btn').on('click', function(){
  $('.header__menu ul').slideToggle();
});

  });