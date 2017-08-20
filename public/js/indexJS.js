$(document).ready(function(){
  $('.logo-expanded').hide();

  $('.logo').hover(
    function(){
      $('.logo-expanded').fadeIn()
    },
    function(){
      $('.logo-expanded').fadeOut();
    }
  );


  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the
      //nav bar to stick.
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 280) {
      $('.top-nav').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 281) {
      $('.top-nav').removeClass('navbar-fixed');
    }
  });

});
