'use strict';
const fs = require('fs');
const parse = require('csv-parse');
const stringify = require('csv-stringify');

const utils = require('./utils.js');


let readStream = fs.createReadStream('./data/sample.csv', 'utf8');
let writeStream = fs.createWriteStream('./data/normalized.csv');

readStream
  .pipe(parse({
    columns: headers => headers.map(utils.convertToUppercase)
  }))
  .on('header', header => console.log(header))
  .on('data', data => console.log(data))
  .pipe(stringify())
  .pipe(writeStream)
