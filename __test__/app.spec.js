'use strict';

//const bpmList = require('.../src/app');
const fileHandler = require('../src/lib/file.js');
const bitMap = require('../src/lib/bitmap.js');

describe('Testing file.js', () => {

  it('should correctly read the file.js', (done) => {
    fileHandler.readFile(`${__dirname}/../src/lib/file.js`, (error, data) => {
      expect(error).toBe(null);
      done();
    });

  });
  it('should throw an error for wrong filename', (done) => {
    fileHandler.readFile(`${__dirname}/../assets/rockstar.bmp`, (error, data) => {
      expect(error).not.toBe(null);
      done();
    });


  });
});

describe('Testing bitmap.js module', () => {
  it('should grab the bitmap picture', () => {
    fileHandler.readFile(`${__dirname}/../assets/bitmap.bpm`, () => {
      expect(error).toBe(null);
    });

  });

});
