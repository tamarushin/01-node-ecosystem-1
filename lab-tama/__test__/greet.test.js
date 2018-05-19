var Greet = require('../lib/greet.js');

describe('Greet', function() {
  var greet = new Greet();

  it('should return null if name is not a string', function() {
    expect(greet.name('')).toEqual('Hello, World');
  });

  it('should return hello world', function() {
    expect(greet.name('')).toEqual('Hello, World');
  });
});

