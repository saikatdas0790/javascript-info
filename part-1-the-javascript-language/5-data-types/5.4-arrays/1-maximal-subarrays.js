const getMaxSubSum = arr => {
  const sumArray = sum(arr);

  for (const element of arr) {
    if (element > sumArray) {
      return element;
    }
  }
  while (sumArray < sum(arr.slice(1))) arr.shift();
  while (sumArray < sum(arr.slice(0, arr.length - 1))) arr.pop();

  return sum(arr);
};

const sum = arr => {
  return arr.reduce((sum, num) => sum + num, 0);
};

module.exports = getMaxSubSum;
