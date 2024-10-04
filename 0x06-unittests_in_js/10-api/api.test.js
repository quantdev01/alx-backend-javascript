const request = require('request');
const { expect } = require('chai');
const app = require('./api'); // Import the Express app

describe('Index page', () => {
  it('Correct status code?', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

// Cart page test suite
describe('Cart page', () => {
  it('Correct status code when :id is a number?', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('Correct status code when :id is NOT a number (=> 404)?', (done) => {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      expect(body).to.include('Cannot GET /cart/hello');
      done();
    });
  });
});

// Available payments test suite
describe('Available payments', () => {
  it('Correct response for GET /available_payments', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });
});

// Login test suite
describe('Login', () => {
  it('Correct response for POST /login', (done) => {
    request.post(
      {
        url: 'http://localhost:7865/login',
        json: { userName: 'Betty' },
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      }
    );
  });
});
