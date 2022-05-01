let calculateDepth = (arr) => {
  let depthArr = Array.isArray(arr)
    ? 1 + Math.max(0, ...arr.map(calculateDepth))
    : 0;
  return depthArr;
};

const arrTest = [1, [8, [[]]], 2, 3, [8, []], 4, 5, []];
console.log(calculateDepth(arrTest));
