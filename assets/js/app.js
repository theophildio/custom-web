$(document).ready(function() {
  // Counter Up
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });


  // Lightbox Img
  $('.img-popup').magnificPopup({
    type:'image',
    gallery:{
      enabled:true
    }
  });
  
  // Lightbox Video
  $('.play-video').magnificPopup({
    type:'iframe'
  });

  // Sticky Menu
  $(window).on('scroll', function() {
    if($(this).scrollTop() > 20) {
      $('.main-menu').addClass('sticky')
    } else {
      $('.main-menu').removeClass('sticky')
    }
  });

  // One page nav
  $('#nav').onePageNav({
    currentClass: 'active'
  })

  // Slick Slider
  $('.testimonial-slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false
  });
})



