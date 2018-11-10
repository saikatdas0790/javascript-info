let calculator = {
  input: {},
  read() {
    this.input.value2 = Number(5) || 0;
    this.input.value1 = Number(6) || 0;
  },
  sum() {
    return this.input.value1 + this.input.value2;
  },
  mul() {
    return this.input.value1 * this.input.value2;
  }
};

calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

module.exports = calculator;
