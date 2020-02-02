$(document).ready(function() {
  $.ajax(
    {
    'url' : 'https://flynn.boolean.careers/exercises/api/array/music',
    'method' : 'GET',
    'success': function (data) {
      processData(data.response);
      // $(document).on('change', 'select', function() {
      //   var genre = $('select').val();
      //   console.log(genre);
      //   for (var i = 0; i < $('.cd').length; i++) {
      //     if ($('.cd').eq(i).find('.genre').text() == genre) {
      //       console.log($('.cd').eq(i).find('.genre').text());
      //       $('.cd').eq(i).show();
      //     } else {
      //       $('.cd').eq(i).hide();
      //     }
      //   };
      // });
      $(document).on('change', 'select', function() {
        var genre = $('select').val();
        console.log(genre);
        $('.cd').each(function(){
          if ($(this).find('.genre').text() == genre) {
            console.log($(this));
            console.log($(this).find('.genre').text());
            $(this).show();
         } else {
           $(this).hide();
        }

        });
      });

    },
    'error' : function (request, state, errors) {
      alert('Errore ' + errors);
    }

  });
});

function processData(cds) {
  for (var i = 0; i < cds.length; i++) {
    var cd = cds[i];
    // console.log(cd);
    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);

    var html = template(cd);
    $('.cds-container').append(html);
  }
}
