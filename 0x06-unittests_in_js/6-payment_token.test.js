// 6-payment_token.test.js
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a successful response when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done to signify the test is complete
      })
      .catch((error) => done(error)); // If there's an error, pass it to done to fail the test
  });

  it('should do nothing when success is false', () => {
    const result = getPaymentTokenFromAPI(false);
    expect(result).to.be.undefined; // When success is false, the function does nothing
  });
});
