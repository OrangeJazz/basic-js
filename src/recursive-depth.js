const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.arr = this;
  }
  calculateDepth(arr) {
    let depthArr = Array.isArray(value)
      ? 1 + Math.max(0, ...value.map(getArrayDepth))
      : 0;
    console.log(depthArr);
    return depthArr;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

const instance = new DepthCalculator();
// const calculateDepth = instance.calculateDepth.bind(instance);

const flatArr = [1, 2, 3, 4, 5];
console.log(instance.calculateDepth.bind(flatArr));

module.exports = {
  DepthCalculator,
};
