var assert = require('assert');
var ac = require('../');

ac.import(function (wordCount) {
  console.log('✓ words imported:', wordCount);
  assert.equal(wordCount, 235886);
});

ac.count(function (err, count) {
  assert.equal(235886, count);
  console.log('✓ word count: ', count);
});

ac.findWords('awes', function (err, words) {
  var justWords = words.map(function (word) {
    return word.key;
  });
  // var awesWords = [ 'awesome', 'awesomely', 'awesomeness', 'awest' ];
  assert.equal(4, justWords.length);
  console.log('✓ word list contains ' + justWords + ' words begining in "awes" ');
});

ac.findWords('zeit', function (err, words) {
  assert.equal(words, 0, 'there are no words begining in zeit');
  console.log('✓ word list contains ' + words.length + ' words containing "zeit" ');
});

ac.incrementViewCount('this', function (err, count) {
  count = parseInt(count, 10);
  // console.log('- - - > ',count);
  assert(count > 0);
  // check agin to confirm it wasn't a fluke.
  ac.incrementViewCount('this', function (err, count2) {
    count2 = parseInt(count2, 10);
    // console.log('- - - > ',count2);
    assert(count < count2);
  });
});
