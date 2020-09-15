$(document).ready(function(){

  $('a').on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollLeft: $(hash).offset().left
      }, 1000, function(){
        window.location.hash = hash;
      });
    }
  });
});