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

   var state = true;

  $("#navlogo").click(function(){
    var nav = $("#navlogo");

    if(state){
      nav.animate({left: '100px'}, "slow");
      nav.animate({fontSize: '3.5em'}, "slow");
    }else{
      nav.animate({left: '0px'}, "slow");
      nav.animate({fontSize: '2em'}, "slow");
    }
    state = !state;
  });


  $("#dropdownMenuButton").click(function(){
    $(".dropdown-menu").slideToggle('slow', 'swing');
  });

});