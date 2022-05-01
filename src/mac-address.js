const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arr = n.split("-");
  // console.log(arr);
  if (arr.length !== 6) return false;
  let res = [];
  arr.forEach((element) => {
    if (element.length !== 2) res.push(false);
    let i = /^[A-F0-9]+$/.test(element);
    res.push(i);
  });
  // console.log(res);
  if (res.includes(false)) return false;
  return true;
}
// console.log(isMAC48Address("Z1-1B-63-84-45-E6"));
// isMAC48Address("00-1B-63-84-45-E6");
module.exports = {
  isMAC48Address,
};
