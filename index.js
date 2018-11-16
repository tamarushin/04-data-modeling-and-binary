
'use strict';

const fileUtils = require('./src/lib/file');

/*
const bitMapParser = require('./src/lib/bitmap');
const transformFiles = require('./src/lib/transform');

const transformations = ['invert', 'randomize', 'add water mark', 'darken or lighten'];

const cliArgs = process.argv;
*/


const inFile = process.argv[2];
const outFile = process.argv[3];
const changing = process.argv[4];

fileUtils.readFile()



