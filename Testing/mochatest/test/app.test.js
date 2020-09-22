const assert = require('chai').assert;
const app = require('../app');

describe('App', () => {
    it('app should return hello', () => {
        let result = app.sayHello();
        assert.equal(result, 'hello');
    });
    it('app should return type string', () => {
        let result = app.sayHello();

        assert.typeOf(result, 'string');
    });
});
