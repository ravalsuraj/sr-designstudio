$(document).ready(function() {

  //Call the owlCarousel plugin

  $('.owl-carousel').owlCarousel({
    loop: true,
    dots: true,
    nav: false,
    items: 1,
    center: true,
    startPosition: 1,
    autoplay: true,
    smartSpeed: 500,
    paginationSpeed: 300,
    singleItem: true,
    responsive: {
      0: {
        margin: 0,
        stagePadding: 0,
        dots: false,
      },

      768: {
        margin: 100,
        stagePadding: 100,
      }
    }
  })

  //Call the fullPage.JS plugin. Allows snap-scrolling full page at a time
  $('#fullpage').fullpage({
    verticalCentered:false,
    //sectionsColor:'none',
    paddingTop:'10vh'

  });


  //Smooth hyperlink redirection and Automatic setting Navbar items as active
  $('.top-nav a').on('click', function() {

    var scrollAnchor = $(this).attr('data-scroll'),
      scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;

    $('body,html').animate({
      scrollTop: scrollPoint
    }, 500);

    return false;

  })

  $(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
      $('.top-nav').addClass('fixed');
      $('.wrapper section').each(function(i) {
        if ($(this).position().top <= windscroll + 100) {
          $('.top-nav li.active').removeClass('active');
          $('.top-nav li').eq(i).addClass('active');
        }
      });

    } else {

      $('.top-nav').removeClass('fixed');
      $('.top-nav li.active').removeClass('active');
      $('.top-nav li:first').addClass('active');
    }
  }).scroll();


});
