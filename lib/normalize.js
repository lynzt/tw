'use strict';
const fs = require('fs');
const parse = require('csv-parse');

const utils = require('./utils.js');


let readStream = fs.createReadStream('./data/sample.csv', 'utf8');

readStream
  .pipe(parse({
    columns: headers => headers.map(utils.convertToUppercase)
  }))
  .on('header', header => console.log(header))
  .on('data', data => console.log(data))
