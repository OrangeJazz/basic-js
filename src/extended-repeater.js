const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = "";
  let repeatTimes = 1;
  if ("repeatTimes" in options) {
    repeatTimes = options.repeatTimes;
  }

  let separator = "+";
  if ("separator" in options) {
    separator = options.separator;
  }
  let addition = "";
  if ("addition" in options) {
    addition = String(options.addition);
  }
  let additionRepeatTimes = 1;
  if ("additionRepeatTimes" in options) {
    additionRepeatTimes = options.additionRepeatTimes;
  }
  let additionSeparator = "|";
  if ("additionSeparator" in options) {
    additionSeparator = options.additionSeparator;
  }
  let addArrRes = [];
  for (let i = 0; i < additionRepeatTimes; i++) {
    addArrRes.push(addition);
  }
  let addRes = addArrRes.join(additionSeparator);

  let arrRes = [];
  let substr = str;
  // console.log(addRes);
  if (addRes) {
    substr = str + addRes;
  }
  for (let j = 0; j < repeatTimes; j++) {
    console.log();
    arrRes.push(substr);
  }
  // console.log(arrRes);
  res = arrRes.join(separator);

  // console.log(res);
  return res;
}

repeater(null, {
  repeatTimes: 3,
  separator: "??? ",
  addition: null,
  additionRepeatTimes: 3,
  additionSeparator: "!!!",
});
module.exports = {
  repeater,
};
