var ac = {}, fs = require('fs'), words = [], searches = {};

ac.import = function (callback) {
  words = fs.readFileSync(__dirname + '/../words.txt', 'utf8').split('\n');
  callback(words.length);
};

ac.findWords = function (word, callback) {
  var found = [];
  for (var i = 0; i < words.length; i++) {
    if (words[i].search(word) > -1) {
      found.push(words[i]);
    }
  }
  callback(null, found);
}

ac.count = function (word, callback) {
  if (searches[word] && searches[word].length) {
    searches[word].push(new Date().getTime());
  }
  else {
    searches[word] = [new Date().getTime()];
  }
  callback(null, searches[word].length);
}

module.exports = ac;
