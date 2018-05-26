'use strict';

const fs = require('fs');
console.log(os.endianness());
const bmpTransformer = require('assets/bitmap.bmp');

module.exports = exports = {};

fs.readFile('app.test.js', err, data) => {
  if (err) return (null);

  const transformed = bmpTransformer (data);
  let stingifyBuffer = buffer => {
    let str = 'invert';
    for(let char of buffer) {
      str += String.fromCharCode(char);
    }
   
  };

  fs.writeFile('index.js', transformed, err => { return (err);
})
