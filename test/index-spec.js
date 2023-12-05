const expect = require('chai').expect
const server = require('./index');

describe('test', () =>{
    it('Should return a string', () =>{
        expect('ci with travis').to.equal('ci with travis');
    });
});