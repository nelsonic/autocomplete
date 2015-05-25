$(function () { // auto complete in 20 lines of code?
  $('#word').keyup(function (e) {
    var word = $('#word').val().trim();
    console.log(word);
    if (word.length < 2) {
      $("#suggest").html('');
    } else {
      $.get("/" + word, function (data) {
        if (data && data.length > 0) {
          var words = data.split(',');
          var html = words.map(function (word) {
            return "<p>" + word + "</p>";
          });
          $("#suggest").html(html.join(''));
        }
      });
    }
  });
});
