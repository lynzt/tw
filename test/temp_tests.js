'use strict';
const chai = require('chai');
const expect = chai.expect;

const utils = require('./../utils');

describe('test helper functions in utils', function() {
  describe('test formatDate', function() {
    it('should return formatted datetime with correct timezone', function() {
      expect(utils.formatDate('4/1/11 11:00:00 AM')).to.equal('2011-04-01T11:00:00-07:00');
    })
  })
})
