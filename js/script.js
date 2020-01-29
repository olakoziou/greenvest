// SLIDER
require('../scss/main.scss');
import '../css/style.css';

$(function() {
  let slides = $('.item');
  let x = 0;
  let dots = $('.dot');

  var width = 900;

  var i = 0;
  function widthBelow() {
    var windowsize = $(window).width();

    if (windowsize > width && i == 0) {
      i = 1;
      console.log(i);
    } else if (windowsize <= width && i == 1) {
      i = 0;
      location.reload();
    }
  }

  var j = 0;
  function widthAbove() {
    var windowsize = $(window).width();

    if (windowsize < width && j == 0) {
      j = 1;
    } else if (windowsize >= width && j == 1) {
      location.reload();
      j = 0;
    }
  }

  // Bind event listener
  $(window).resize(widthBelow);
  $(window).resize(widthAbove);

  let windowResize = $(window).width();
  if (windowResize < width) {
    $('.btn-right').click(nextSlide);
    $('.btn-left').click(prevSlide);
  } else {
    $('.btn-right').click(bigNextSlide);
    $('.btn-left').click(bigPrevSlide);
    $('.dots')
      .children()
      .css('display', 'none');
  }

  //next func
  function nextSlide() {
    if (x === slides.length - 1) {
      $('.btn-right').attr('disabled', true);
    } else {
      $(slides).css('left', '100vw');
      $(slides.eq(x)).css('left', '-100vw');
      $(slides.eq(x + 1)).css('left', '0vw');
      x++;
    }
    dotsChange();
  }

  //prev func
  function prevSlide() {
    if (x === 0) {
      $('.btn-left').attr('disabled', true);
    } else {
      $(slides).css('left', '-100vw');
      $(slides.eq(x)).css('left', '100vw');
      $(slides.eq(x - 1)).css('left', '0vw');
      x--;
    }
    dotsChange();
  }

  //DOTS
  //change color after clicking arrows
  function dotsChange() {
    dots.each(function(e) {
      if (e === x) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  }

  function bigNextSlide() {
    if (x === slides.length - 1) {
      $('.btn-right').attr('disabled', true);
    } else {
      $(slides.eq(x)).css('left', '-100vw');
      $(slides.eq(x + 1)).css('left', '0vw');
      $(slides.eq(x + 1)).css('right', '50%');
      x++;
      $(slides.eq(x + 1)).css('left', '50%');
      $(slides.eq(x + 1)).css('right', '0');
    }
  }

  function bigPrevSlide() {
    if (x === 0) {
      $('.btn-left').attr('disabled', true);
    } else {
      $(slides.eq(x)).css('left', '50%');
      $(slides.eq(x)).css('right', '0');
      $(slides.eq(x - 1)).css('left', '0vw');
      $(slides.eq(x - 1)).css('right', '50%');
      $(slides.eq(x + 1)).css('left', '100vw');
      x--;
    }
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

  // CARDS OPEN
  const btns = $('.btn');
  const close = $('.close');

  btns.each(function() {
    $(this).click(function() {
      let elNumb = $(this)
        .attr('id')
        .slice(-1);
      $('.card-opened').css({ opacity: 1, visibility: 'visible' });
      $(`#card-${elNumb}`).addClass('active');
      $(`#card-${elNumb}`).css('display', 'block');
    });
  });

  close.each(function() {
    $(this).click(function() {
      $('.card-opened').css({ opacity: 0, visibility: 'hidden' });

      $(this)
        .parent()
        .parent()
        .removeClass('active');

      $(this)
        .parent()
        .parent()
        .css('display', 'none');
    });
  });

  // MENU

  const hmaburger = $('.header__menu-icon');
  const closeMenu = $('.header__menu-navigation-icon');
  const menuItems = $('.header__menu-navigation ul li');
  hmaburger.click(function() {
    $('.header__menu-navigation').css('transform', 'scale(1)');
  });

  closeMenu.click(function() {
    $('.header__menu-navigation').css('transform', 'scale(0)');
  });

  var windowsize = $(window).width();
  if (windowsize < 1200) {
    menuItems.each(function() {
      $(this).click(function() {
        $('.header__menu-navigation').css('transform', 'scale(0)');
      });
    });
  }

  // SCROLL TOP

  $(document).scroll(function() {
    var scroll = $(this).scrollTop();
    if (scroll > 100) {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut();
    }
  });
});
