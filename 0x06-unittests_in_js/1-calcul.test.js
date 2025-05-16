const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should add rounded values', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6); // 1 + 5
      assert.strictEqual(calculateNumber('SUM', 2, 3), 5);      // 2 + 3
    });
  });

  describe('SUBTRACT', function () {
    it('should subtract rounded values', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.4, 1.2), 4); // 5 - 1
      assert.strictEqual(calculateNumber('SUBTRACT', 2.6, 3.3), 0); // 3 - 3
    });
  });

  describe('DIVIDE', function () {
    it('should divide rounded values', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 7.8, 2.1), 4); // 8 / 2
      assert.strictEqual(calculateNumber('DIVIDE', 9.4, 2.5), 3); // 9 / 3
    });

    it('should return Error when dividing by 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.2, 0.2), 'Error'); // 1 / 0
      assert.strictEqual(calculateNumber('DIVIDE', 1.2, 0.4), 'Error'); // 1 / 0
    });
  });

  describe('Invalid type', function () {
    it('should throw an error if type is invalid', function () {
      assert.throws(() => calculateNumber('MULTIPLY', 1, 2), /Invalid type/);
    });
  });
});
