$(document).ready(function() {
  // console.log($(window).width());

  $('#burger').click(function(){
    $('.modal-left').addClass('slide');
  });

  $('#noodles').click(function(){
    $('.modal-right').addClass('slide');
  });

  $('.close').click(function(){
    $('.modal').removeClass('slide');
  });

  $('.recipe-but').click(function(){
    $(this).parent().children('.component-container').children('.component').children('.recipe').toggleClass('active');
    $(this).toggleClass('recipe-active');
  });
  $('.slider').slick();
});

