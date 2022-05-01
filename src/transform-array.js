const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-prev") {
      if (res[res.length - 1] == "delete") res.push("some");
      else {
        // console.log("!!!");
        res.pop();
        res.push("some");
      }
    } else if (arr[i] === "--double-prev") {
      if (res[res.length - 1] == "delete") res.push("some");
      else if (arr[i - 1]) res.push(arr[i - 1]);
    } else if (arr[i] === "--double-next") {
      if (arr[i + 1]) res.push(arr[i + 1]);
    } else if (arr[i] === "--discard-next") {
      res.push("delete");
    } else {
      res.push(arr[i]);
      if (res[res.length - 2] == "delete") {
        res.pop();
      }
    }
  }
  const str = ["delete", "some"];
  res = res.filter((item) => !str.includes(item));

  console.log(res);
  return res;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
transform([1, 2, 3, "--double-next", 1337, "--double-prev", 4, 5]);
// transform([1, 2, 3, 4, "--double-next", 5, "--double-next"]);

module.exports = {
  transform,
};
