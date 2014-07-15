var should = require('chai').should(),
    ac = require('../');

describe('autocomplete', function() {
  it('returns autoc...', function() {
    ac.auto().should.equal('autoc...');
  });
});

describe('Word List DB Import', function() {
  it('should import a list english words', function(done) {

    ac.import(function(err, words){
      ac.count(function(err,count){
        count.should.equal(235886); // 354983
        console.log('  ---> WordCount:',count);
        done();
      });
    });
  });
});
