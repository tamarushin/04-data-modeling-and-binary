//contians your core application
'use strict';

const ParsedBitmap = require('./lib/bitmap');
const fileHandler = require('./lib/file');

fileHandler.readFile(`${__dirname}/../assets/bitmap.bmp`, (error, data) => {
  if(error){
    console.log('Error');
  }
  else{
    let bitmap = new ParsedBitmap(data);
    fileHandler.writeFile(`${__dirname}/../assets/bitmap2.bmp`, bitmap.convertBlackAndWhite(), (err, data) => {
      if(err) console.log('error writing');
      else {
        console.log(data);
      }
    });
    console.log(bitmap);

  }
});




