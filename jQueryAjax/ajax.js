$(function() {
  $('#hakunappi').click(function() {


    $('#shows1, #shows2, #shows3, #shows4, #shows5').remove();

    let hakuteksti = $('#hakuteksti').val();

    $.getJSON(`http://api.tvmaze.com/search/shows?q=${hakuteksti}`,
        function(data) {

          $.each(data, function(index, value) {

            if(index<2) {
              $('#series').
                  append(
                      '<div class="card-group col-sm-12  col-md-6 col-lg-6" id="shows1"><article class="card text-center shadow p-3 mb-5 bg-white rounded" id="' +
                      value.show.name +
                      '"></article></div>');
            }else if(index<4){
              $('#series2').
                  append(
                      '<div class="card-group col-sm-12 col-md-6 col-lg-6" id="shows2"><article class="card text-center shadow p-3 mb-5 bg-white rounded" id="' +
                      value.show.name +
                      '"></article></div>');
            }else if(index<6){
              $('#series3').
                  append(
                      '<div class="card-group col-sm-12 col-md-6 col-lg-6" id="shows3"><article class="card text-center shadow p-3 mb-5 bg-white rounded" id="' +
                      value.show.name +
                      '"></article></div>');
            }else if(index<8){
              $('#series4').
                  append(
                      '<div class="card-group col-sm-12 col-md-6 col-lg-6" id="shows4"><article class="card text-center shadow p-3 mb-5 bg-white rounded" id="' +
                      value.show.name +
                      '"></article></div>');
            }else {
              $('#series5').
                  append(
                      '<div class="card-group col-sm-12 col-md-6 col-lg-6" id="shows4"><article class="card text-center shadow p-3 mb-5 bg-white rounded" id="' +
                      value.show.name +
                      '"></article></div>');
            }


            if (value.show.name === null) {
              $('article:eq(' + index + ')').
                  append(
                      '<div class="card-header"><H1 id="' + value.show.name +
                      '_nimi">Ohjelmalla ei ole nimeä</H1></div>');
            }
            else {
              $('article:eq(' + index + ')').
                  append(
                      '<div class="card-header"><H1 id="' + value.show.name +
                      '_nimi">' +
                      value.show.name + '</H1></div>');
            }

            if (value.show.image === null) {
              $('article:eq(' + index + ')').
                  append('<p id="' + value.show.name + '_kuva" alt="' +
                      value.show.name + '_kuva">Ei kuvaa</p>');
            }
            else {
              $('article:eq(' + index + ')').
                  append('<img id="' + value.show.name + '_kuva" alt="' +
                      value.show.name + '_kuva" src="' +
                      value.show.image.medium + '">');
            }

            if (value.show.genres < 1) {
              $('article:eq(' + index + ')').
                  append(
                      '<section class="list-group list-group-flush"><p class="list-group-item"  id="' +
                      value.show.name + '_genre">Ei genrejä</p></section>');
            }
            else {
              $('article:eq(' + index + ')').
                  append(
                      '<section class="list-group list-group-flush"><p class="list-group-item font-weight-bold" id="' +
                      value.show.name + '_genre">' +
                      value.show.genres + '</p></section>');
            }

            if (value.show.summary === null || value.show.summary === '') {
              $('article:eq(' + index + ')').
                  append('<p class="list-group-item" id="' + value.show.name +
                      '_yhteenveto">Ei yhteenvetoa</p>');
            }
            else {
              $('article:eq(' + index + ')').append(value.show.summary);
              $('article p:last-child').
                  attr('id', '' + value.show.name + '_yhteenveto', 'class',
                      'list-group-item');
            }

            if (value.show.officialSite === null) {
              $('article:eq(' + index + ')').
                  append('<p id="' + value.show.name +
                      '_kotisivu">Ei kotisivua</p>');
            }
            else {
              $('article:eq(' + index + ')').
                  append('<a id="' + value.show.name +
                      '_kotisivu" href="' +
                      value.show.officialSite + '">Linkki kotisivulle</a>');
            }

          });
        });
  });

  $('a').on('click', function(event) {

    if (this.hash !== '') {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top,
      }, 1000, function() {
        window.location.hash = hash;
      });
    }
  });
});