// Main javaScript

// Disappearing circles
$(document).ready(function(){
  $('#green_circ').fadeIn(3000);
  $('#orange_circ').fadeIn(6000);
  $('#blue_circ').fadeIn(10000);
  $('div.circle').css('display', 'inline-block');
// Ninja disappear
  var $ninja = $('img#ninja');
  $ninja.mouseenter(function(){
    $(this).fadeTo(0, 0);
  });
  $ninja.mouseleave(function(){
    $(this).fadeTo(1000, 1);
  });
  //  Light switch
  var $lights = $('div.switch p');
  $lights.on('click', function(){
    $(this).html() == 'ON' ? $(this).html('OFF') : $(this).html('ON');
  });
  $lights.on('click', function(){
    $('section.dark-room').toggleClass('dark-room, light-room');
  });
  $lights.on('click', function(){
    if ($lights.html() == 'OFF') {
      $('.bug-holder img').attr('src', 'img/cartoon-eyes.png');
    } else { $('.bug-holder img').attr('src', 'img/bug2.jpg')};
  });
});
