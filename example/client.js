$(function() {
  console.log('Type Something!');
  $('#word').keyup(function(e){
    console.log(e);
    var word = $('#word').val().trim();
    console.log(word);
    if(word.length < 2){
      $( "#suggest" ).html('');
    } else {
      $.get( "/"+word, function( data ) {

        if( data && data.length > 0) {

          console.log(typeof data ); //+' - '+data);
          var words = data.split(',');
          var html = words.map(function(word){
            return "<p>"+word+"</p>";
          });

          $( "#suggest" ).html( html.join('') );
        }
      });
    }
  });
});
