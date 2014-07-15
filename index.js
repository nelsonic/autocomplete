var ac = {};
var fs = require('fs');
var level = require('level');
var db = level(__dirname + '/db');

ac.auto = function() {
    return 'autoc...';
};

// Import the list of words from words.txt into LevelDB
ac.import = function(callback) {
  // read file and split into an array of lines
  var lines = fs.readFileSync(__dirname + '/words2.txt', 'utf8')
    .split('\n');

    // uses batch chained: https://github.com/rvagg/node-levelup#batch_chained
    var batch = db.batch();
    lines.forEach(function (word) {
      // if(word.length > 0){
        batch.put(word, 0); // number of times word was searched for
      // }
    });
    batch.write();
    var words = 'imported';
    callback(null, words);
};

ac.count = function (callback) {
  var count = 0;
  db.createReadStream()
    .on('data', function(data){
      count++;
    })
    .on('end', function(){
      // console.log(' - - - -',count);
      callback(null, count);
    }); // no error handling is *deliberate*
};

ac.findWord = function(word, callback) {
  var words = [];
  var key = word.trim();
  var i = 0;
  db.createReadStream({ start: key, end: key + '\xff' })
    .on('data', function (data) {
      // console.log('- - - - ',i++);
      // console.dir(data);
      words.push(data);
    })
    .on('end', function () {
      // if (callback)
      // console.log('- - - - ->> words count',words.length);
      callback(null, words);
    });
};


module.exports = ac;
