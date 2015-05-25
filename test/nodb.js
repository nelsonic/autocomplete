var assert = require('assert');
var ac = require('../lib/nodb');

ac.import(function (wordCount) {
  console.log('✓ words imported:', wordCount);
  assert.equal(wordCount, 235886);
});

ac.findWords('awes', function (err, words) {
  // var awesWords = [ 'awesome', 'awesomely', 'awesomeness', 'awest' ];
  assert.equal(4, words.length);
  console.log('✓ word list contains ' + words + ' words begining in "awes" ');
});

ac.findWords('zeit', function (err, words) {
  console.log(' - - - - - - - - - ');
  console.log(words);
  console.log(' - - - - - - - - - ');
  assert.equal(words.length, 2, 'there are no words begining in zeit');
  console.log('✓ word list contains ' + words.length + ' words begining in "zeit" ');
});

ac.count('this', function (err, count) {
  count = parseInt(count, 10);
  // console.log(' count - - - > ', count);
  assert(count > 0);
  // check agin to confirm it wasn't a fluke.
  ac.count('this', function (err, count2) {
    count2 = parseInt(count2, 10);
    // console.log(' count2 - - - > ', count2);
    assert(count < count2);
  });
});
