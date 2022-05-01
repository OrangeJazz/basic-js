const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let subArr = [];
  arr.forEach((el) => {
    if (el !== -1) {
      subArr.push(el);
    }
  });
  subArr = subArr.sort((a, b) => b - a);
  // console.log(subArr);
  let res = [...arr];
  for (let i = 0; i < res.length; i++) {
    if (res[i] !== -1) {
      res[i] = subArr[subArr.length - 1];
      subArr.pop();
    }
  }
  // console.log(res);
  return res;
}

// sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);

module.exports = {
  sortByHeight,
};
