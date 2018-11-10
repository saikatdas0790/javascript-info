const reverseSorter = arr => {
  arr.sort((a, b) => b - a);
  return arr;
};

module.exports = reverseSorter;
