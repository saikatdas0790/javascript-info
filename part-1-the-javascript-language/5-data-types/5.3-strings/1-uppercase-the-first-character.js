function ucFirst(str) {
  return str ? `${str[0].toUpperCase()}${str.slice(1)}` : "";
}

module.exports = ucFirst;
