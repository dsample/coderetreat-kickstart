'use strict';

const chai = require('chai');
const expect = chai.expect;
const hello = require('../hello');

describe('hello', () => {
  it('says hello', () => {
    expect(hello()).to.equal('hi');
  })
});
