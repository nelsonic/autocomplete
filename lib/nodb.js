var ac = {}, fs = require('fs');

ac.import = function (callback) {
  ac.words = fs.readFileSync(__dirname + '/../words.txt', 'utf8').split('\n');
  return callback(ac.words.length);
};

ac.findWords = function (word, callback) {
  var found = [];
  for (var i = 0; i < ac.words.length; i++) {
    if (ac.words[i].search(word) > -1) {
      found.push(ac.words[i]);
    }
  }
  console.log(' - - - - - - - - - - - - - - - - - - word:', word);
  console.log(' - - - - - - - - - - - - - - - - - - found:');
  console.log(found);
  console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - - - ');


  return callback(null, found);
}

ac.count = function (word, callback) {
  if (!ac.searches) {
    ac.searches = {};
  }

  if (ac.searches[word] && ac.searches[word].length) {
    ac.searches[word].push(new Date().getTime());
  }
  else {
    ac.searches[word] = [new Date().getTime()];
  }

  return callback(null, ac.searches[word].length);
}

// automatically import all the words into RAM when module is required!
ac.import(function (count) {
  console.log(count + ' Words Imported!');
});

module.exports = ac;
