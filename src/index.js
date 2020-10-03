
exports.min = function min (array) {
  if (!array || array.length === 0) {
    return 0;
  } else {
      let minNum = Math.min(... array);
      return minNum;
  }
}

exports.max = function max (array) {
  if (!array || array.length === 0) {
    return 0;
  }
  let maxNum = Math.max(... array);
  return maxNum;
}

exports.avg = function avg (array) {
  if (!array || array.length === 0) {
    return 0;
  } else {
      let summ = 0;
      for (a of array) {
        summ += a;
      }
      return (summ / array.length);
  } 
}
