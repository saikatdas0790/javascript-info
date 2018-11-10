const camelize = kebabCaseString => {
  if (!kebabCaseString) return "";
  const splitString = kebabCaseString.split("-");
  for (let index = 1; index < splitString.length; index++) {
    const string = splitString[index];
    const upperCasedString = `${string[0].toUpperCase()}${string.substring(1)}`;
    splitString[index] = upperCasedString;
  }
  return splitString.join("");
};

module.exports = camelize;
