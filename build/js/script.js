// SLIDER
require('../scss/main.scss');
import '../css/style.css';

$(function() {
  let slides = $('.item');
  console.log(slides);
  let lastSlide = slides.length - 1;
  let x = 0;
  let dots = $('.dot');
  console.log(x);

  $('.btn-right').click(nextSlide);
  $('.btn-left').click(prevSlide);

  //next func
  function nextSlide() {
    $(slides.eq(x)).css('left', '-100vw');
    $(slides.eq(x + 1)).css('left', '0vw');
    x++;
    if (x > slides.length - 1) {
      $(slides).css('left', '100vw');
      $(slides)
        .eq(0)
        .css('left', '0vw');

      x = 0;
    }
    dotsChange();
  }

  //prev func
  function prevSlide() {
    $(slides.eq(x)).css('left', '100vw');
    $(slides.eq(x - 1)).css('left', '0vw');
    x--;
    if (x < 0) {
      $(slides).css('left', '-100vw');
      $(slides)
        .eq(lastSlide)
        .css('left', '0vw');

      x = lastSlide;
    }
    dotsChange();
  }

  //DOTS
  //change color after clicking arrows
  function dotsChange() {
    dots.each(function(e) {
      console.log($(this));
      if (e === x) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  }

  //change slide after clicking dot + set class
  dots.each(function(e) {
    $(this).click(function() {
      dots.removeClass('active');
      slides.eq(x).css('left', '-100vw');
      slides.eq(e).css('left', '0vw');
      x = e;
      if (!$(this).hasClass('active')) {
        $(this).addClass('active');
      }
    });
  });
});
