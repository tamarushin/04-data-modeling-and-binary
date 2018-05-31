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
    duplicate(width, height){
        this.buffer.writeInt32LE(width, 18);
        this.buffer.writeInt32LE(height, 22);
    }
    convertBlackAndWhite(){
        for(let i = 54; i < (this.numColors * 4) + 54; i+=4){
            let r = this.buffer[i];
            let g = this.buffer[i+1];
            let b = this.buffer[i+2];
            if(r * g * b < (1/2)*512){
                this.buffer[i] = 0xFF;
                this.buffer[i+1] = 0xFF;
                this.buffer[i+2] = 0xFF;
            }else{
                this.buffer[i] = 0;
                this.buffer[i+1] = 0;
                this.buffer[i+2] = 0;
            }
        }
        return this.buffer;
    }
    
}

module.exports = ParsedBitmap;



