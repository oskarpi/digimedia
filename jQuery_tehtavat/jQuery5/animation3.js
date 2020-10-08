$(document).ready(function () {
  $('nav').hide();

  $('#navigation').mouseleave(function(event) {
    $('nav').stop().hide(500);
  });
  $('#navigation').mouseover(function(event) {
    $('nav').stop().show(500);

  });
});