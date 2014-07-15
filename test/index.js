var should = require('chai').should(),
    ac = require('../');

describe('autocomplete', function() {
  it('returns autoc...', function() {
    ac.auto().should.equal('autoc...');
  });
});

describe('Word List', function() {

  before(function dbSetup() {
    ac.import(function(err, words){
      console.log('words imported.');
    });
  });

  it('should contain a list english words', function(done) {
    ac.count(function(err,count){
      count.should.equal(235886); // 354983
      console.log('  ---> WordCount:',count);
      done();
    });
  });

  it('contains 4 words begining in "awes" ', function(done) {
    ac.findWord('awes', function(err,words){
      var justWords = words.map( function(word) {
        return word.key;
      });
      console.log(justWords);
      var awesWords = [ 'awesome', 'awesomely', 'awesomeness', 'awest' ];
      justWords.length.should.equal(4);
      done();
    });
  });


});
