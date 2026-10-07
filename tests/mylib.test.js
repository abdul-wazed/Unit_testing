// tests/mylib.test.js
const expect = require('chai').expect;
const mylib = require('../mylib');

describe('mylib Arithmetic Operations', function() {
    
    // Runs once before all tests in this block
    before(function() {
        console.log('>>> Starting the mylib test suite...');
    });

    // Runs once after all tests in this block
    after(function() {
        console.log('>>> Finished the mylib test suite.');
    });

    it('should accurately add two numbers', function() {
        expect(mylib.add(2, 3)).to.equal(5);
    });

    it('should accurately subtract two numbers', function() {
        expect(mylib.subtract(10, 4)).to.equal(6);
    });

    it('should accurately multiply two numbers', function() {
        expect(mylib.multiply(3, 4)).to.equal(12);
    });

    it('should accurately divide two numbers', function() {
        expect(mylib.divide(10, 2)).to.equal(5);
    });

    it('should throw a ZeroDivisionError when dividing by zero', function() {
        // When testing for thrown errors, wrap the function call in an anonymous function
        expect(() => mylib.divide(10, 0)).to.throw("ZeroDivisionError: Cannot divide by zero");
    });
});
