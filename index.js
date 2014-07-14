var ac = {};
var fs = require('fs');
var level = require('level');
var db = level(__dirname + '/autocomplete');

ac.auto = function() {
    return 'autoc...';
};

// Import the list of words from words.txt into LevelDB
ac.import = function(callback) {
  // read file and split into an array of lines
  var lines = fs.readFileSync(__dirname + '/words.txt', 'utf8')
    .split('\n');

    // uses batch chained: https://github.com/rvagg/node-levelup#batch_chained
    var batch = db.batch();
    lines.forEach(function (word) {
      if(word.length > 0){
        batch.put(word, 0); // number of times word was searched for
      }
    });
    batch.write();
    var words = 'imported';
    if (callback) {
      callback(null, words);
    }
};

ac.count = function (callback) {
  var count = 0;
  db.createReadStream()
    .on('data', function(data){
      count++;
    })
    .on('end', function(){
      console.log(' - - - -',count);
      if(typeof callback === 'function'){
        callback(null, count);
      }
    })
    .on('error', function (err) {
      if (callback) {
        callback(err);
      }
    });
};

module.exports = ac;
