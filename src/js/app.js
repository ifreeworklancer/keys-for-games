import jquery from 'jquery';
import Flickity from 'flickity';

window.jQuery = window.$ = jquery;

import 'flickity/dist/flickity.css';

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


})(jQuery)


/**
 * Sliders header
 */
var elem1 = document.querySelector('.header-slider-js');
if(elem1) {

  const flkty1 = new Flickity(elem1, {

    prevNextButtons: false,
    cellAlign: 'left',
    contain: true
  
  });
  
  
  var nextArrowHeader = document.querySelector('#header-next-arrow');
  var indexSliderHeader = document.getElementById('index-slider-header');
  indexSliderHeader.innerText = flkty1.selectedIndex + 1;
  
  nextArrowHeader.addEventListener('click', function () {
    flkty1.next(true, false);
    indexSliderHeader.innerText = flkty1.selectedIndex + 1;
  });
  
  var prevArrowHeader = document.querySelector('#header-prev-arrow');
  
  prevArrowHeader.addEventListener('click', function () {
    flkty1.previous(true, false);
    indexSliderHeader.innerText = flkty1.selectedIndex + 1;
  });
  
  var cellElements = flkty1.getCellElements().length;
  var lastSliderHeader = document.getElementById('last-slider-header');
  
  lastSliderHeader.innerText = cellElements;
  
}



/**
 * Sliders comments
 */
var elem3 = document.querySelector('.comments-slider');

if(elem3) {

  const flkty3 = new Flickity(elem3, {

    groupCells: 1,
    cellSelector: '.comments-item',
    prevNextButtons: false,
    wrapAround: true,
    initialIndex: 1,
    cellAlign: 'center',
    contain: false
  
  });
  
  var nextArrowComments = document.querySelector('#comments-next-arrow');
  
  nextArrowComments.addEventListener('click', function () {
    flkty3.next(true, false);
  });
  
  var prevArrowComments = document.querySelector('#comments-prev-arrow');
  
  prevArrowComments.addEventListener('click', function () {
    flkty3.previous(true, false);
  });
}


/**
 * Sliders rest
 */
var elem4 = document.querySelector('.rest-product-slider');

if(elem4) {
  const flkty4 = new Flickity(elem4, {

    groupCells: 1,
    cellSelector: '.rest-item',
    prevNextButtons: false,
    wrapAround: true,
    contain: false
  
  });
  
  var nextArrowRest = document.querySelector('.rest-next-arrow');
  
  nextArrowRest.addEventListener('click', function () {
    flkty4.next(true, false);
  });
  
  var prevArrowRest = document.querySelector('.rest-prev-arrow');
  
  prevArrowRest.addEventListener('click', function () {
    flkty4.previous(true, false);
  });
}
