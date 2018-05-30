/*

The CLI should be architected using best modularization practices
The CLI should require at least three arguments input-file-path output-file-path transform-name
The CLI should support a minimum of four transforms
The CLI should log useful Error messages if used incorrectly
The CLI should log a success message on completion

-Read it, transform it, save it methods
*/
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



