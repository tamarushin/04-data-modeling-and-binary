'use strict';

const os = require('os');
console.log(os.endianness()); 

let stringifyBuffer = buffer => {
  let str = '';
  for(let char of buffer) {
    str += String.fromCharCode(char);
  }
  return str;
}
