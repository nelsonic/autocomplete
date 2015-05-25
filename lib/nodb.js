var ac    = {}; // module
var fs    = require('fs');
var words = []; // store words in GLOBAL words array
var searches = {}; // number of times a word has been searched for
// Import the list of words from words.txt into LevelDB
ac.import = function (callback) {
  // read file and split into an array of lines
  words = fs.readFileSync(__dirname + '/../words.txt', 'utf8').split('\n');
  callback(words.length);
};
// invoke
ac.import(function (count) {
  console.log("COUNT:", count);
});


ac.findWords = function (word, callback) {
  var found = [];
  for (var i = 0; i < words.length; i++) {
    if (words[i].search(word) > -1) {
      found.push(words[i]);
    }
  }
  callback(null, found);
}

// invoke find
ac.findWords('awe', function (err, found) {
  console.log(found.join(', '));
  console.log("FOUND COUNT:", found.length);
});


ac.count = function (word, callback) {
  if (searches[word]) {
    searches[word] = searches[word] + 1;
  }
  else {
    searches[word] = 1;
  }
  callback(null, searches[word]);
}

ac.count('this', function (err, count) {
  console.log(count);
  ac.count('this', function (err, count2) {
    console.log(count2);
  });
});

module.exports = ac;
