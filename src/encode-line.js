const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = [];
  if (!str) return "";
  let arr = str.split("");
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] !== arr[i]) {
      res.push(count);
      count = 1;
      res.push(arr[i]);
      continue;
    }
    if (arr[i + 1] == arr[i]) {
      count++;
      continue;
    }
  }
  res = res.filter((el) => el !== 1).join("");
  return res;
}
console.log(encodeLine(""));
module.exports = {
  encodeLine,
};
