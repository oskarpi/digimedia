$(document).ready(function(){

  'use strict';

  var $projects = $(".projektit");

  $projects.isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
  });

  $('ul.filters > li').on('click', function(e) {

    e.preventDefault();

    var filter = $(this).attr('data-filter');

    $('ul.filters > li').removeClass('active');
    $(this).addClass('active');

    $projects.isotope({filter : filter});

  });

  $('.card').mouseenter(function() {

    $(this).find('.card-overlay').css({'top':'-100%'});
    $(this).find('.card-hover').css({'top':'0'});

  }).mouseleave(function() {

    $(this).find('.card-overlay').css({'top':'0'});
    $(this).find('.card-hover').css({'top':'100%'});

  });

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

  $('#movedown, #movedown2').on('click', function(event) {


      $('html, body').animate({
        scrollTop: $('.filters').offset().top
      }, 1000);
      });


  $("#navbarDropdownMedia").click(function(){
    $("#dropdown-menu-Media").slideToggle(1000);
  });

  $("#navbarDropdownOhjelmointi").click(function(){
    $("#dropdown-menu-Ohjelmointi").slideToggle(1000);
  });

});