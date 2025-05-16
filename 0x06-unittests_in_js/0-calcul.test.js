const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calcualteNumber', function () {
  it('should return 4 when a=1 and b=3', function() {
    assert.strictEqual(calculateNumber(1,3), 4);
  });

  it('should return 5 when a=1 and b=3.7', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when a=1.2 and b=3.7', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when a=1.5 and b=3.7', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should round first number only', function () {
    assert.strictEqual(calculateNumber(1.4, 3), 4); 
    assert.strictEqual(calculateNumber(1.5, 3), 5);
  });

  it('should round second number only', function () {
    assert.strictEqual(calculateNumber(1, 3.4), 4);
    assert.strictEqual(calculateNumber(1, 3.5), 5);
  });

  it('should round both numbers', function () {
    assert.strictEqual(calculateNumber(1.5, 3.5), 6);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
});
