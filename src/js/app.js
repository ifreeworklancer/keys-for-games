import jquery from 'jquery';
import slick from 'slick-carousel';

window.jQuery = window.$ = jquery;
window.slick = slick;

(function () {

  /**
   * Burger-menu
   */
  $('.burger-menu').click(function () {
    var menu = $('#menu-nav');
    $(this).toggleClass('active');
    if (menu.is(':visible')) {
      menu.slideUp();
    } else {
      menu.slideDown();
    }
  });

  /**
   * Form-label
   */
  $('.input__field--makiko').on('focus', function () {
    $(".input__label-content--makiko").addClass('in-focus');
  });

  $('.input__field--makiko').on('blur', function () {
    if ($(this).val() !== "") {
      $(".input__label-content--makiko").addClass('in-focus');
    } else {
      $(".input__label-content--makiko").removeClass('in-focus');
    }
  });

  /**
   * Sliders
   */
  $('.header-slider-js').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: false,
    prevArrow: '<button type="button" class="prev-arrow font-weight-bold text-dark">ПРЕД<svg width="35" height="25" class="pl-2"><use xlink:href="#slick-left-arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="next-arrow font-weight-bold text-dark"><svg width="35" height="25" class="pr-2"><use xlink:href="#slick-right-arrow"></use></svg>СЛЕД</button>',
    dots: true,
    customPaging: function (slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return '<a class="dot-numbers">' + '0' + (i + 1) + '</a>';
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          prevArrow: '<button type="button" class="prev-arrow"><svg width="35" height="25"><use xlink:href="#slick-left-arrow"></use></svg></button>',
          nextArrow: '<button type="button" class="next-arrow"><svg width="35" height="25"><use xlink:href="#slick-right-arrow"></use></svg></button>',
        }
      }
    ]

  });


})(jQuery)