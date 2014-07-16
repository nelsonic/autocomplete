var ac = {};
var fs = require('fs');
var level = require('level');
var db = level(__dirname + '/db');

// check if a key exists, else import word list:
db.get('name', function (err, value) {
/* istanbul ignore if */
  if (err) {
    ac.import( console.log(' ✓ words imported.') );
    return console.log('Ooops!', err);
  }
});

// Import the list of words from words.txt into LevelDB
ac.import = function(callback) {
  // read file and split into an array of lines
  var lines = fs.readFileSync(__dirname + '/words.txt', 'utf8')
    .split('\n');
    var wc = 0;
    // uses batch chained: https://github.com/rvagg/node-levelup#batch_chained
    var batch = db.batch();
    lines.forEach(function (word) {
      batch.put(word, 0); // number of times word was searched for
      wc++;
    });
    batch.write();
    callback(wc);
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

ac.findWords = function(word, callback) {
  var words = [];
  var key = word.trim();
  db.createReadStream({ start: key, end: key + '\xff' })
    .on('data', function (data) {
      words.push(data);
    })
    .on('end', function () {
      callback(null, words);
    });
};

ac.incrementViewCount = function(word, callback) {
  db.get(word, function(err, value){
    value = parseInt(value,10) + 1;
    // console.log(word, value);
    db.put(word, value, function (err) {
    /* istanbul ignore if */
      if (err) {
        return console.log('Ooops!', err); // some kind of I/O error
      }
    // callback(null, value);

      db.get(word, function(err, count){
        // console.log("Updated:",count);
        // db.put(word, value);
        callback(null, count);
      });
    });
  });
};


module.exports = ac;
