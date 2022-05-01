const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let res = 0;
  res = n
    .toString()
    .split("")
    .map(Number)
    .reduce(function (a, b) {
      return a + b;
    }, 0);

  if (res >= 10) {
    // console.log(`NEW CYCLE WITH N=${res}`);
    res = getSumOfDigits(res);
    return res;
  }
  return res;
}
console.log(`RESULT:${getSumOfDigits(91)}`);

module.exports = {
  getSumOfDigits,
};
