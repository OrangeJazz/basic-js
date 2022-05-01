const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  arr = n.toString().split("");
  let arrOfNum = [];
  // let num = "";
  let arr2 = [...arr];
  for (let i = 0; i < arr.length; i++) {
    arrWithout = arr2
      .slice(0, i)
      .concat(arr2.slice(i + 1, arr2.length))
      .join("");
    // console.log(arr2);
    // arrAfter = arr2.slice(i + 1, arr2.length);
    arrOfNum.push(parseInt(arrWithout));
    // console.log(arrAfter);
  }
  // console.log(arrOfNum);
  const res = Math.max(...arrOfNum);
  // console.log(res);
  return res;
  // console.log(arr);
}
deleteDigit(342);
// deleteDigit(342);
module.exports = {
  deleteDigit,
};
