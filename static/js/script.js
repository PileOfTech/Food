$(document).ready(function() {
  // console.log($(window).width());

  $('#burger').click(function(){
    $('.modal').removeClass('slide');
    $('.modal-left').addClass('slide');
  });

  $('#noodles').click(function(){
    $('.modal').removeClass('slide');
    $('.modal-right').addClass('slide');
  });

  $('.close').click(function(){
    $('.modal').removeClass('slide');
  });

  $('.recipe-but').click(function(){
    $(this).parent().children('.component-container').children('.component').children('.recipe').toggleClass('active');
    $(this).toggleClass('recipe-active');
  });

  $('.burger').click(function(){
    $('.mobile-menu').toggleClass('active');
    $('body').toggleClass('disable');
  });

  $('.mob').click(function(){
    $('.mobile-menu').removeClass('active');
    $('body').removeClass('disable');
  });

  $('.slider').slick({
    autoplay: false,
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right')
  });
});

