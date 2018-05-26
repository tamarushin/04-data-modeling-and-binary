//Entry point for CLI

'use strict';

const fileUtils = require('./src/lib/file.js');
const bitMapParser = require('./src/lib/bitmap.js');
const transformFiles = require('./src/lib/transform.js');
const transformations = ['invert', 'randomize', 'add water mark', 'darken or lighten'];
const cliArgs = process.argv;

// let originalFile = process.argv[2] 