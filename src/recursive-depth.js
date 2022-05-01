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
  calculateDepth(arr) {
    // let depthArr = Array.isArray(arr) ? 1 + Math.max(0, ...arr.map(calculateDepth)) : 0;
    let depthArr = Array.isArray(arr)
      ? 1 + Math.max(0, ...arr.map(this.calculateDepth.bind(this)))
      : 0;
    return depthArr;
  }
}

module.exports = {
  DepthCalculator,
};
