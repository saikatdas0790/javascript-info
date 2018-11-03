function checkSpam(str) {
  return (
    str.toUpperCase().includes("VIAGRA") || str.toUpperCase().includes("XXX")
  );
}

module.exports = checkSpam;
