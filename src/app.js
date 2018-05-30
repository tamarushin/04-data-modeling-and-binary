//contians your core application

const ParsedBitmap = require('./lib/bitmap');
const fileHandler = require('./lib/file');

fileHandler.readFile(`${__dirname}/../assets/bitmap.bmp`, (error, data) => {
    if(error){
        console.log('Error');
    }
    else{
        let bitmap = new ParsedBitmap(data);
        bitmap.scaleUp(200, 200);
        fileHandler.writeFile(`${__dirname}/../assets/bitmap5.bmp`, bitmap.getBuffer(), (err, data) => {
            if(err) console.log('error writing');
            else {
                console.log(data);
            }
        })
        console.log(bitmap);
    }
})




