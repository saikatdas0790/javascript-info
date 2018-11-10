const filterRange = (arr, startingValue, endingValue) =>
  arr.filter(element => element <= endingValue && element >= startingValue);

module.exports = filterRange;
