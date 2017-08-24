$(document).ready(function(){
    //Scroll and shadow//
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
          $('nav').addClass('shadow');
        } else {
          $('nav').removeClass('shadow');
        }
      });
});