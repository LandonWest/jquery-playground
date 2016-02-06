// Main javaScript

// Disappearing circles
$(document).ready(function(){
  $('#green_circ').fadeIn(3000);
  $('#orange_circ').fadeIn(6000);
  $('#blue_circ').fadeIn(10000);
  $('div.circle').css('display', 'inline-block');
// Ninja disappear
  $('img#ninja').mouseenter(function(){
    $(this).fadeTo(0, 0);
  });
  $('img#ninja').mouseleave(function(){
    $(this).fadeTo(1000, 1);
  });
  //  Light switch
  $('div.switch p').on('click', function(){
    $(this).html() == 'ON' ? $(this).html('OFF') : $(this).html('ON');
  });
});
