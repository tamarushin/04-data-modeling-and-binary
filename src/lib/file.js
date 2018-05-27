//Read file and right file method that reads file 

'use strict';

const fs = require('fs');
 

const readFile = (path, callback) => {
    fs.readFile(path, (err, data)=> {
        if(err) return callback(err);
        return callback(null, data);

    });
};

const writeFile = (fileName, newBuffer, cb) => {
    fs.writeFile(FileName, newBuffer, (err, data) => {
        if(err) return cb(err);
        return cb(null, data);
    });
};

module.exports = {
    readFile,
    writeFile
};