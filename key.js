const { EOL } = require('os');

const arr = [
  new Array(50).fill(' '),
  new Array(50).fill(' '),
  new Array(50).fill(' '),
];

console.log(arr.join(EOL));
