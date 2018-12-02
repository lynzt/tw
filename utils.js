'use strict';
const moment = require('moment-timezone');

exports.formatDate = function(date) {
  return moment.tz(date, 'M/D/YYYY h:m:s a', 'US/Pacific').format();
}
