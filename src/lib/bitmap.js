'use strict';

const COLOR_TABLE_OFFSET = 54;

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
    this.pixelBitmap = buffer.slice(COLOR_TABLE_OFFSET, this.filesize);
    

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

  convertYellowOrange() {
    for (let i = 0; i < this.colorTable.length; i += 4) {
      this.buffer[i + COLOR_TABLE_OFFSET] = 0;
    }
    return this.buffer;
  }

  convertPurplePinkScale() {
    for (let i =0; i < this.colorTable.length; i += 4) {
      this.buffer[(i + 1) + COLOR_TABLE_OFFSET] = 0;
    }
    return this.buffer;
  }

  convertInvert() {
    this.colorTable.reverse();
    return this.buffer;
  }   
}

module.exports = ParsedBitmap;



