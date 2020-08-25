$('p:eq(1)').attr('id','sp'); // $(function(){ $('p:eq(1)').attr('id','sp')}); ready funktio
$('#fp').remove();
$('#fdiv').css('background-color', 'grey');
$('#fdiv').css('color','white');
$('#nappi').click(function() {
  $('#fdiv').append('<p id="tp">Hello User</p>');
});

$('#4p').hide();

$('#sdiv').hover(
    function () {
      $('#4p').show();
      $('#4p').text('About the select a link');
    },
    function () {
      $('#4p').hide();
      $('#4p').html('&nbsp;');
    });
/*
$('#fdiv').css(
    {
      backgroundColor: 'grey',
      color: 'white'
    }
);
 */