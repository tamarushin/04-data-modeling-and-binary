![Build Status](https://travis-ci.com)
# Lab 04: Bitmap Transformer
===

# Author
Tama Rushin

## Lab Build
For this assignment, Richard Tae and I built a bitmap (`.bmp`) transformer CLI. It reads a bitmap in from disk, runs one or more color or raster transforms and then writes it out to a new file. This project required the use of node buffers in order to manipulate binary data. The modules are thoughtfully named and well documented. The entry point to our CLI is an index.js file in the root of our package, and all the helper modules are in our lib/ directory. Our bitmap transformer modules do not use any third party libraries.


##  Documentation
In your README.md describe the exported values of each module you have defined. Every function description should include it's arity (expected number of parameters), the expected data for each parameter (data-type and limitations), and it's behavior (for both valid and invalid use). Feel free to write any additional information in your README.md.

# Lib/ Module--bitmap.js
# Lib/ Module--file.js
# Lib/ Module--transform.js

# Test and Mocks

#### Minimum Requirements
* The CLI should be architected using best modularization practices
* The CLI should require at least three arguments `input-file-path output-file-path transform-name` 
* The CLI should support a minimum of four transforms
* The CLI should log useful Error messages if used incorrectly
* The CLI should log a success message on completion

## Testing 
* Use BDD `describe` and `test` methods to define descriptive tests and increase readability
* Each `test` callback should aim to test a small well defined feature of a function
* Write tests to ensure each function behaves correctly with valid and invalid inputs
* The CLI should be tested without using `child_process` or any equivalent third party libraries


## Tips
You will want to define a strategy for solving the problem before you begin to code. Once you have a strategy defined, you can break it into steps that can be split into helper modules. Each helper module should solve a small specific problem. The main module should utilize the helper modules to execute your original strategy.

###### Example Strategy 
0. Gather user input (infile, outfile, and transform)
0. Read the input bitmap file using the fs module 
0. Parse the bitmap's buffer into object representing a bitmap (using a constructor)
0. Using metadata from the parsed bitmap object run a transform on the buffer directly (mutate the color or raster data)
0. Write the mutated buffer to the output file path

###### Transform Ideas
* Color Pallet Transforms 
  * Invert 
  * Randomize
  * Black and White
  * Darken or Lighten
  * Add or Multiply a Hue
  * Add or Subtract Contrast
  
* Raster Data Transforms
  * Pixilate
  * Add a border
  * Add a watermark
  * Vertically or Horizontally Flip
  * Vertically or Horizontally Mirror
  * Vertically or Horizontally Stretch
