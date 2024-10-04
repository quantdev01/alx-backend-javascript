// 5-payment.test.js
import sinon from 'sinon';
import { expect } from 'chai';
import sendPaymentRequestToApi from './5-payment.js';

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    // Set up the spy on console.log before each test
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the original console.log after each test
    spy.restore();
  });

  it('should log the correct total for 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    // Verify that console.log was called with the correct message
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 120')).to.be.true;
  });

  it('should log the correct total for 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    // Verify that console.log was called with the correct message
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 20')).to.be.true;
  });
});
