multiplyNumeric = function(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
};

module.exports = multiplyNumeric;
