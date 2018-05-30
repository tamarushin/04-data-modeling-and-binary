//contians your core application

const ParsedBitmap = require('./lib/bitmap');
const fileHandler = require('./lib/file');

fileHandler.readFile(`${__dirname}/../assets/bitmap.bmp`, (error, data) => {
    if(error){
        console.log('Error');
    }
    else{
        let bitmap = new ParsedBitmap(data);
        console.log(bitmap);
    }
})




