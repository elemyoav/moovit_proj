const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/app');

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('App', () => {
  it('should return status 200 on / GET', (done) => {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});