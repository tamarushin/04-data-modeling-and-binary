'use strict';

class ParsedBitmap{
    constructor(buffer){
        this.buffer = Buffer.from(buffer);
        this.type = buffer.toString('utf8', 0, 2);
        this.fileSize = buffer.readInt32LE(2);
        this.width = buffer.readInt32LE(18);
        this.height = buffer.readInt32LE(22);
        this.bytesPerPixel = buffer.readInt32LE(28);
        this.numColors = buffer.readInt32LE(46);
        this.colorTable = buffer.slice(54, this.numColors * 4);
    }
    getBuffer(){
        return this.buffer;
    }
    scaleUp(width, height){
        this.buffer.writeInt32LE(width, 18);
        this.buffer.writeInt32LE(height, 22);
    }
    makeBlack(){
    }
}

module.exports = ParsedBitmap;



