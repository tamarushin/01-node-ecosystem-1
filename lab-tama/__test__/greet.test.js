var greet = require('../lib/greet.js');

describe('Greet', function() {
 

  it('should return null if name is not a string', function() {
    expect(greet()).toBeNull();
  });

  it('should return hello world', function() {
    expect (greet('World')).toEqual('Hello, World');
  });
});

