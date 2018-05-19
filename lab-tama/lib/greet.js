'use strict';

function greet(name) {

  // if (arguments.length !== 1) throw new Error('name not provided');
  if (typeof name !== 'string') return null;

  return `Hello, ${name}`;
}

module.exports = greet;