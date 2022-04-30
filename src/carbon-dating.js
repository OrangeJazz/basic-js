const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(str) {
  const num = Number(str);
  // console.log(typeof str);
  // console.log(num);
  if (
    isNaN(num) ||
    typeof str != "string" ||
    !str ||
    str.trim().length == 0 ||
    num <= 0 ||
    num >= 15
  ) {
    console.log(false);
    return false;
  } else {
    const carbonTime = Math.ceil(
      (Math.log(MODERN_ACTIVITY / num) * HALF_LIFE_PERIOD) / 0.693
    );
    console.log(carbonTime);
    return carbonTime;
  }
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
dateSample("9000");
// dateSample("1");

module.exports = {
  dateSample,
};
