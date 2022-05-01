const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let res = [];
  // let countes = {};
  let number = [];

  for (let i = 0; i < names.length; i++) {
    let count = 0;
    for (let j = 0; j < i; j++) {
      if (names[j] === names[i]) count++;
    }
    number.push(count);
  }
  // console.log(number);

  for (let i = 0; i < names.length; i++) {
    // console.log(`EL: ${names[i]}`);
    if (!res.includes(names[i]) && number[i] === 0) {
      res.push(names[i]);
    } else if (number[i] !== 0) {
      res.push(`${names[i]}(${number[i]})`);
    } else if (res.includes(names[i]) && number[i] === 0) {
      number[i] == number[i]++;
      res.push(`${names[i]}(${number[i]})`);
    }
  }
  // console.log(res);
  return res;
}
renameFiles(["doc", "doc", "image", "doc(1)", "doc"]);
module.exports = {
  renameFiles,
};
