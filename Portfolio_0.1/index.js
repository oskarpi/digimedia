$(document).ready(function(){

  $('a').on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    }
  });


  $("#navlogo").click(function(){
    var nav = $("#navlogo");
    nav.animate({left: '100px'}, "slow");
    nav.animate({fontSize: '3em'}, "slow");
  });

  $("#dropdownMenuButton").click(function(){
    $(".dropdown-menu").slideToggle('slow', 'swing');
  });

});