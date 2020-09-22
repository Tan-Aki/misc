var app = require('../app'),
    chai = require('chai'),
    request = require('supertest');
describe('POST /login', function () {
    it('responds with json', function (done) {
        request(app)
            .post('/api/users/login')
            .send({ email: 'test@test.com', password: 'test123' })
            .set('Accept', 'application/json')
            // .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    }).timeout(200000);
});
