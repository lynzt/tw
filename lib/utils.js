'use strict';
const moment = require('moment-timezone');

exports.formatMonthDayYearTime = function(date) {
  return moment.tz(date, 'M/D/YYYY h:m:s a', 'US/Pacific')
    .tz('US/Eastern')
    .format();
}

exports.formatZipcode = function(zipcode) {
  return zipcode.padStart(5, 0);
}

exports.convertToUppercase = function(str) {
  return str.toUpperCase();
}

exports.convertTimeToSec = function(time) {
  let timeParts = time.split(/[:.]/)
  // FIXME: this str to nbr conversion is fragile
  let [h, m, s, ms] = timeParts.map(tp => parseFloat(tp))
  let seconds = hourToSecs(h) + minToSecs(m) + s + msToSecs(ms);
  return seconds;
}

function hourToSecs(hours) {
  return hours * 60 * 60;
}

function minToSecs(minutes) {
  return minutes * 60;
}

function msToSecs(ms) {
  return ms / 1000;
}
