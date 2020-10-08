$('button').click(function() {
  $('#advice').text('select your favourite colour among the colours');
  $('#img1').attr('src','red.jpg');
  $('#img2').attr('src','blue.jpg');
  $('#img3').attr('src','yellow.jpg');
  $('#sel').text('your favourite colours in order');

  $('#img1').click(function() {
    $('#img1').hide();
    $('ul').append('<li id="red">red</li>');
  });


  $('#img2').click(function() {
    $('#img2').hide();
    $('ul').append('<li id="blue">blue</li>');
  });


  $('#img3').click(function() {
    $('#img3').hide();
    $('ul').append('<li id="yellow">yellow</li>');
  });
});



