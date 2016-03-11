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

  //  Pull Tab
  $('.pull-me').click(function(){
    $('.panel').slideToggle('slow');
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
    $('.bug-holder-off').toggleClass('bug-holder-off, bug-holder-on');
  });
  $('.bug-holder-off').hover(function() {
    $(this).toggle('blind');
  });

  // To Do List
  $('#todo-btn').click(function(){
    var toAdd = $('input[name=checklist-item]').val();
    $('.list').append("<li class='item'>" + toAdd + "</li>");
  });
  $(document).on('click', '.item', function(){
    $(this).remove();
  });

  // Move the Turtle
  $(document).keydown(function(key){
    switch(parseInt(key.which,10)) {
      // Left Arrow Pressed
      case 37:
        $('#turtle').animate({left: "-=40px"}, 'fast');
        break;
      // Up Arrow Pressed
      case 38:
        $('#turtle').animate({top: "-=40px"}, 'fast');
        break;
      // Right Arrow Pressed
      case 39:
        $('#turtle').animate({left: "+=40px"}, 'fast');
        break;
      // Down Arrow Pressed
      case 40:
        $('#turtle').animate({top: "+=40px"}, 'fast');
        break;
    }
  });

// Kill the Death Star
  $('#xwing').click(function(){
    $('#death-star').effect('explode', {pieces: 36})
    $('#laser').animate({left: "1600px"}, 'fast');
  })

// Slide in circle nav menu
  $('.person-icon').hover(
    function() {
      $(this).append( $("<span>Click here to see our team!</span>") );
    }, function() {
      $(this).find("span:last").remove();
    }
  );

  $('.person-icon').click(function() {
    $('.effect').toggle('slide', 'slow');
  });
});
