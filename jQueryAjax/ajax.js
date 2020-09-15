$(function() {

  $('#hakunappi').click(function() {

    $( 'li' ).remove();

    let hakuteksti = $('#hakuteksti').val();

    $.getJSON(`http://api.tvmaze.com/search/shows?q=${hakuteksti}`, function(data) {
    console.log(data);
    /*
    for(let i=0; i< data.length; i++){
      console.log(data[i]);
    }
    */

    $.each(data, function(index, value) {


      $('ul').append('<li id="'+index+'"></li>');


      if(value.show.name===null){
        $('li:eq('+index+')').append('<H1 id="nimi">Ohjelmalla ei ole nimeä</H1>');
      }else{
        $('li:eq('+index+')').append('<H1 id="nimi">'+value.show.name+'</H1>');
      }



      if(value.show.genres<1){
        $('li:eq('+index+')').append('<p id="genre">Ei genrejä</p>');
      }else {
        $('li:eq('+index+')').append('<p id="genre">'+value.show.genres+'</p>');
      }

      if(value.show.image ===null){
        $('li:eq('+index+')').append('<p id="kuva">Ei kuvaa</p>');
      }else{
        $('li:eq('+index+')').append('<img id="kuva" src="'+value.show.image.medium+'">');
      }

      if(value.show.summary===null || value.show.summary===''){
        $('li:eq('+index+')').append('<p>Ei yhteenvetoa</p>')
      }else{
        $('li:eq('+index+')').append(value.show.summary);
        $('li p:last-child').attr('id','yhteenveto');
      }

      if(value.show.officialSite===null){
        $('li:eq('+index+')').append('<p id="kotisivu">Ei kotisivua</p>')
      }else {
        $('li:eq('+index+')').append('<a href="'+value.show.officialSite+'">Linkki kotisivulle</a>');
      }

    });
    });
  });
});