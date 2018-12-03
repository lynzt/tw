'use strict';
const fs = require('fs');
const parse = require('csv-parse');
const stringify = require('csv-stringify');
const transform = require('stream-transform');

const utils = require('./utils.js');

let readStream = fs.createReadStream('./data/sample-with-broken-utf8.csv', 'utf8');
let writeStream = fs.createWriteStream('./data/normalized.csv');

function processLine(line) {
  let fooDuration = utils.convertTimeToSec(line.FOODURATION);
  let barDuration = utils.convertTimeToSec(line.BARDURATION);
  let normalizedLine = {
    TIMESTAMP: utils.formatMonthDayYearTime(line.TIMESTAMP),
    ADDRESS: line.ADDRESS,
    ZIP: utils.formatZipcode(line.ZIP),
    FULLNAME: line.FULLNAME,
    FOODURATION: fooDuration,
    BARDURATION: barDuration,
    TOTALDURATION: fooDuration + barDuration,
    NOTES: line.NOTES
  }
  return normalizedLine;
}

function normalizeCsv() {
  readStream
    .pipe(parse({
      columns: headers => headers.map(utils.convertToUppercase)
    }))
    .pipe(transform(data => processLine(data)))
    .pipe(stringify())
    .pipe(writeStream)
}

normalizeCsv();
