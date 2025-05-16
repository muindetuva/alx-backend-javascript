const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('SUM', function () {
  it('should add rounded values', function () {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    expect(calculateNumber('SUM', 2, 3)).to.equal(5);
    expect(calculateNumber('SUM', 3.2, 3.3)).to.equal(6);
    expect(calculateNumber('SUM', 0, 0)).to.equal(0);
  });
});

describe('SUBTRACT', function () {
  it('should subtract rounded values', function () {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', 5.5, 2.2)).to.equal(4);
    expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
  });
});

describe('DIVIDE', function () {
  it('should divide rounded values', function () {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.closeTo(0.2, 0.0001);
    expect(calculateNumber('DIVIDE', 8.3, 2.5)).to.be.closeTo(2.6667, 0.0001);
    expect(calculateNumber('DIVIDE', 9, 3)).to.equal(3);
  });

  it('should return Error when dividing by 0', function () {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
  });
});

