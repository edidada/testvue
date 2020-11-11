var assert = require('assert');
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1,2,3].indexOf(4), -1);
            // console.log("array is -1") no msg
            // assert.strictEqual(1,2,"dfdfdsfds");
        });
    });
});