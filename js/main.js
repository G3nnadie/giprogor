$(document).ready(function () {

  // Menu mobail
  $('.navbar-toggle').on('click', function() {
    $(this).toggleClass('active');
    $('.nav').slideToggle( 200, function() {});
  });

  // Scroll spee
  // $('.address').on('click','a', function (event) {
  //   event.preventDefault();
  //   var id  = $(this).attr('href'),
  //     top = $(id).offset().top;
  //     $('body,html').animate({scrollTop: top}, 800);
  // });

  // Show menu mobail
  // $('.navbar-toggle').click(function () {
  //   $(this).toggleClass('active');
  //   $('.nav').toggleClass('open');
  // });

  // Header add class
  // $(window).scroll(function() { 
  //   var top = $(document).scrollTop();
  //   if (top > 0) {
  //     $('.header').addClass('scroll-page');
  //   }
  //   else {
  //     $('.header').removeClass('scroll-page');
  //   }
  // });

  // Hidden nav
  // $(document).click(function(event) {
  //   if ($(event.target).closest('.navbar-toggle').length 
  //     || $(event.target).closest('.nav').length ) return;
  //     $('.nav').removeClass('open');
  //     $('.navbar-toggle').removeClass('active');
  //     event.stopPropagation();
  // });

  // Maskedinput
  // $(function($){
  //   $('.phone-mask').mask(('+7 ') + '(999) 999-99-99');
  // });

  // Accardion
  // var accordion = function() {
  //   var data = $('.accordion').attr('data-accordion')
  //   $('.accordion-header').on('click', function(){
  //     $(this).next('.accordion-body').not(':animated').slideToggle()
  //   })
  //   $('.accordion-header').click(function () {
  //     $(this).parent('.accordion li').toggleClass('active');
  //   });
  // }
  // accordion();

  // Tabs
  $('.tabs__item').not(':first').hide();
  $('.tabs__nav-item').click(function() {
    $('.tabs__nav-item').removeClass('tabs__nav-item--active').eq($(this).index()).addClass('tabs__nav-item--active');
    $('.tabs__item').hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass('tabs__nav-item--active');

  // Company sl
  var swiper = new Swiper(".company__sl", {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 'auto',
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        spaceBetween: 20,
      },
      992: {
        spaceBetween: 45,
        allowTouchMove: false
      },
      1200: {
        spaceBetween: 90,
        allowTouchMove: false,
      },
    },
  });

  // Project sl
  var swiper = new Swiper(".project__sl", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

});

