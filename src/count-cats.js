const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
// function countCats(arr) {
//   // throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
//   let countOfCats = 0;
//   const cat = "^^";
//   arr.forEach((element) => {
//     if (element.includes(cat)) countOfCats++;
//   });
//   return countOfCats;
//   // }
// }

function countCats(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let countOfCats = 0;
  const cat = "^^";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === cat) countOfCats++;
    }
  }
  return countOfCats;
}

// countCats([
//   [0, 1, "^^"],
//   [0, "^^", 2],
//   ["^^", 1, 2],
// ]);
// console.log(t);
module.exports = {
  countCats,
};
