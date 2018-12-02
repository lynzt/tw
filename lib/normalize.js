'use strict';
const fs = require('fs');


let readStream = fs.createReadStream('./data/sample.csv', 'utf8');
readStream.on('data', data => {
  console.log(data);
})
