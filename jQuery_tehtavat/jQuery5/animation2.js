$(document).ready(function() {

  $('a').on('click', function(event) {

    let link = $(this).attr("href");

    $('#pages').animate({
      scrollLeft: $('#pages').scrollLeft() + $(link).offset().left
    }, 500, function() {
      event.preventDefault();
    });
  })
});