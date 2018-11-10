const getMaxSubSum = arr => {
  let maxSoFar = 0;
  let maxEndingHere = 0;

  arr.forEach(element => {
    maxEndingHere = maxEndingHere + element;
    if (maxEndingHere < 0) maxEndingHere = 0;
    if (maxSoFar < maxEndingHere) maxSoFar = maxEndingHere;
  });

  return maxSoFar;
};

module.exports = getMaxSubSum;
