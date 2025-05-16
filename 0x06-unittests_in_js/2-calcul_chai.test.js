const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should add rounded values', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT', function () {
    it('should subtract rounded values', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('DIVIDE', function () {
    it('should divide rounded values', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return Error when dividing by 0', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
    });
  });

  describe('Invalid type', function () {
    it('should throw an error if type is invalid', function () {
      expect(() => calculateNumber('MULTIPLY', 1, 2)).to.throw('Invalid type');
    });
  });
});
