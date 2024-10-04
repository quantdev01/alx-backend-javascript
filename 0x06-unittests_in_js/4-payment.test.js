// 4-payment.test.js
import sinon from 'sinon';
import { expect } from 'chai';
import Utils from './utils.js';
import sendPaymentRequestToApi from './4-payment.js';

describe('sendPaymentRequestToApi', () => {
  let stub;
  let spy;

  beforeEach(() => {
    // Stub the Utils.calculateNumber function to always return 10
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the original functions
    stub.restore();
    spy.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, and 20', () => {
    sendPaymentRequestToApi(100, 20);

    // Verify that the stub was called with the correct arguments
    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;

    // Verify that console.log was called with the correct message
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 10')).to.be.true;
  });
});
