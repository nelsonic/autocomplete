var QUnit    = require('qunitjs');        // require QUnit and all its friends
require('qunit-tap')(QUnit, console.log); // tell qunit-tap to use console.log for test output
var ac = require('../');

QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

console.log('TESTS!')
test("Import the data", function(assert) {
  var done = assert.async();
  console.log('hello!')
  ac.import(function(wordCount){
    console.log('    ✓ words imported:', wordCount);
    assert.ok(wordCount, '    ✓ words imported:', wordCount)
    done();
  });
});

test('should contain a list english words', function(assert) {
  var done = assert.async();
  ac.count(function(err,count){
    equal(235886, count); // 354983
    done();
  });
});

test('contains 4 words begining in "awes" ', function(assert) {
  var done = assert.async();
  ac.findWords('awes', function(err,words){
    var justWords = words.map( function(word) {
      return word.key;
    });
    var awesWords = [ 'awesome', 'awesomely', 'awesomeness', 'awest' ];
    equal(4, justWords);
    console.log(justWords);
    done();
  });
});

test('contains 0 words beginning in "zeit" ', function(assert) {
  var done = assert.async();
  ac.findWords('zeit', function(err,words){
    equal(words, 0, 'there are no words begining in zeit');
    done();
  });
});


test('increment the view count for a word ', function(assert) {
  var done = assert.async();
  ac.incrementViewCount('this', function(err,count){
    count = parseInt(count,10);
    // console.log('- - - > ',count);
    equal(1, count);
    // check it wasn't a fluke.
    ac.incrementViewCount('this', function(err,count2){
      count2 = parseInt(count2,10);
      // console.log('- - - > ',count2);
      equal(2, count2);
      done();
    });
  });
});
