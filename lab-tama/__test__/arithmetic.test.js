
'use strict';

const arithmetic = require('../lib/arithmetic.js');
const assert = require('assert');

describe('arithmetic', function () {
  describe('add', function () {
    it('it should return the sum of two numbers', function () {
      var result = arithmetic.add(5, 8);
      assert.ok(result === 13, 'not equal to 13');
    });

    it('should throw a non-number error', function () {
      assert.throws(function () {
        arithmetic.add();
      }, 'error not thrown');
    });
  });
  describe('subtract', function () {
    it('it should return the difference of two numbers', function () {
      var result = arithmetic.subtract(12, 10);
      assert.ok(result === 2, 'not equal to 2');
    });

    it('should throw a non-number error', function () {
      assert.throws(function () {
        arithmetic.subtract();
      }, 'error not thrown');
    });
  });
});

//I started over using the method assert (from node.js) Assert.ok() checks if a value is true. Both Pass now!!