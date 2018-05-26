'use strict';

/*
Gather user input (infile, outfile, and transform)
Read the input bitmap file using the fs module
Parse the bitmap's buffer into object representing a bitmap (using a constructor)
Using metadata from the parsed bitmap object run a transform on the buffer directly (mutate the color or raster data)
Write the mutated buffer to the output file path
*/


let bpmList = require('./src/app.js');



