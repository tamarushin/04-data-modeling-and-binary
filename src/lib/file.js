'use strict';

//Read file and write file method that reads file 

const fs = require('fs');


const readFile = (path, callback) => {
  fs.readFile(path, (err, data) => {
    if (err) return callback(err);
    return callback(null, data);

  });
};

const writeFile = (fileName, newBuffer, cb) => {
  fs.writeFile(fileName, newBuffer, (err, data) => {
    if (err) return cb(err);
    return cb(null, data);
  });
};
module.exports = {
  readFile,
  writeFile
};
