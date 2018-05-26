//Read file and right file method that reads file 

'use strict';

const fs = require('fs');

module.exports = {};

exports.readFile = (path, callback) => {
    fs.readFile(path, (err, data)=> {
        if(err) return cb(err);
        return cb(null, data);

    });
}