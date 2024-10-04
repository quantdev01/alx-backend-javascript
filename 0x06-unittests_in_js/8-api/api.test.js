const request = require('request');
const { expect } = require('chai');
const app = require('./api'); // Import the Express app

describe('Index page', () => {
  // Test the GET / route
  it('Correct status code?', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200); // Check for status 200
      done(); // Indicate the test is complete
    });
  });

  it('Correct result?', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system'); // Check the response body
      done();
    });
  });

  // Add other tests as needed
});
