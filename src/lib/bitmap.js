
'use strict';

const fs = require('fs');
const bitmapBuffer = fs.readFile(`${__dirname}./assets/bitmap.bmp`);

const bmp = {};

bmp.type = bitmapBuffer.toString('utf-8', 0, 2);
bmp.fileSize = bitmapBuffer.readInt32LE(2); //file size
bmp.bytesPerPixel = bitmapBuffer.readInt16LE(8); //bytes per pixel offset
bmp.height = bitmapBuffer.readInt32LE(100); //height offset
bmp.width = bitmapBuffer.readInt32LE(100); //width offset
bmp.numColors = bitmapBuffer.readInt32LE(256); //number of colors


console.log('my current bitmap buffer file:', bmp);

let COLOR_TABLE_SIZE = bmp.numColors * 4;
bmp.colorTable = buffer.slice(COLOR_TABLE_OFFSET, COLOR_TABLE_SIZE)

console.log(bmp);