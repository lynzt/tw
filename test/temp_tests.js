'use strict';
const chai = require('chai');
const expect = chai.expect;

const utils = require('./../utils');

describe('test helper functions in utils', function() {
  describe('test formatMonthDayYeartime', function() {
    it('should return formatted datetime with correct date and timezone', function() {
      expect(utils.formatMonthDayYearTime('4/1/11 11:00:00 AM')).to.equal('2011-04-01T14:00:00-04:00');
      expect(utils.formatMonthDayYearTime('3/12/14 12:00:00 AM')).to.equal('2014-03-12T03:00:00-04:00');
      expect(utils.formatMonthDayYearTime('2/29/16 12:11:11 PM')).to.equal('2016-02-29T15:11:11-05:00');
      expect(utils.formatMonthDayYearTime('1/1/11 12:00:01 AM')).to.equal('2011-01-01T03:00:01-05:00');
      expect(utils.formatMonthDayYearTime('12/31/16 11:59:59 PM')).to.equal('2017-01-01T02:59:59-05:00');
      expect(utils.formatMonthDayYearTime('11/11/11 11:11:11 AM')).to.equal('2011-11-11T14:11:11-05:00');
      expect(utils.formatMonthDayYearTime('5/12/10 4:48:12 PM')).to.equal('2010-05-12T19:48:12-04:00');
      expect(utils.formatMonthDayYearTime('10/2/04 8:44:11 AM')).to.equal('2004-10-02T11:44:11-04:00');
    });
  });

  describe('test formatMonthDayYeartime', function() {
    it('should left pad zipcode with starting 0s', function() {
      expect(utils.formatZipcode('94121')).to.equal('94121');
      expect(utils.formatZipcode('1')).to.equal('00001');
      expect(utils.formatZipcode('1101')).to.equal('01101');
      expect(utils.formatZipcode('1231')).to.equal('01231');
      expect(utils.formatZipcode('121')).to.equal('00121');
      expect(utils.formatZipcode('11')).to.equal('00011');
    });
  });

  describe('test convertToUppercase', function() {
    it('should convert string to uppercase', function() {
      expect(utils.convertToUppercase('abc')).to.equal('ABC');
      expect(utils.convertToUppercase('AbC123')).to.equal('ABC123');
      expect(utils.convertToUppercase('\u0434\u0430')).to.equal('ДА');
      expect(utils.convertToUppercase('août')).to.equal('AOÛT');
    })
  })

  describe('test convertTimeToSec', function() {
    it('should convert HH:MM:SS.MS to float of seconds', function() {
      expect(utils.convertTimeToSec('1:23:32.123')).to.equal(5012.123);
      expect(utils.convertTimeToSec('0:0:0.0')).to.equal(0);
      expect(utils.convertTimeToSec('111:23:32.123')).to.equal(401012.123);
    })
  })

})
