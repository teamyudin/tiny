var assert = require('assert');
var tiny = require('../index');

describe('Tiny', function() {
  describe('Tiny', function() {
    it('should replace spaces from a string', function() {
      assert.equal(tiny('Hello World'), 'HelloWorld');
    });
  });
  describe('Tiny', function() {
    it('should error out from numeric', function() {
      assert.throws(() => tiny(1), TypeError, 'Tiny wants a string!');
    });
  });  
});

