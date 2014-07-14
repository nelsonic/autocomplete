var should = require('chai').should(),
    ac = require('../index')();

describe('autocomplete', function() {
  it('returns autoc...', function() {
    ac.should.equal('autoc...');
  });
});
