'use strict';

class ParsedBitmap{
    constructor(buffer){
        this.type = buffer.toString('utf8', 0, 2);
        this.fileSize = buffer.readInt32LE(2);
        this.width = buffer.readInt32LE(18);
        this.height = buffer.readInt32LE(22);
        this.bytesPerPixel = buffer.readInt32LE(28);
        this.numColors = buffer.readInt32LE(46);
        this.colorTable = buffer.slice(54, this.numColors * 4);
    }
}

module.exports = ParsedBitmap;



