var should = require('chai').should(),
    ac = require('../');

describe('Word List', function() {

  before(function dbSetup() {
    ac.import(function(wordCount){
      console.log('    ✓ words imported:', wordCount);
    });
  });

  it('should contain a list english words', function(done) {
    ac.count(function(err,count){
      count.should.equal(235886); // 354983
      // console.log('    --> WordCount:',count);
      done();
    });
  });

  it('contains 4 words begining in "awes" ', function(done) {
    ac.findWords('awes', function(err,words){
      var justWords = words.map( function(word) {
        return word.key;
      });
      var awesWords = [ 'awesome', 'awesomely', 'awesomeness', 'awest' ];
      justWords.length.should.equal(4);
      console.log(justWords);
      done();
    });
  });

  it('contains 0 words beginning in "zeit" ', function(done) {
    ac.findWords('zeit', function(err,words){
      words.length.should.equal(0);
      done();
    });
  });


  it('increment the view count for a word ', function(done) {
    ac.incrementViewCount('this', function(err,count){
      count = parseInt(count,10);
      // console.log('- - - > ',count);
      count.should.equal(1);
      // check it wasn't a fluke.
      ac.incrementViewCount('this', function(err,count2){
        count2 = parseInt(count2,10);
        // console.log('- - - > ',count2);
        count2.should.equal(2);
        done();
      });
    });
  });

});
