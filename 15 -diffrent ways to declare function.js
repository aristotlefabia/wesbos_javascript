//

const { doc } = require('prettier');

// function expression
const doctorize = function (firstName) {
  return `DR1. ${firstName}`;
};

const doctorize2 = (firstName) => `DR2. ${firstName}`;

console.log(doctorize('AI'));

console.log(doctorize2('AI'));

const add = (a = 3, b = 100) => a + b;
console.log(add(100));
const makeBaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });
console.log(makeBaby('name', 'last'));

/// IIFE immediately invoked function expression

const greet = {
  hi: function hi() {
    return 'hi';
  },
  hello() {
    return 'hello';
  },

  arrow: () => 'arrow',
};
console.log(greet.hi(), greet.hello(), greet.arrow());
