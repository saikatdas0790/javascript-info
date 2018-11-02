let calculator = {
  input: {},
  read() {
    this.input.value1 = Number(prompt("Enter the first value")) || 0;
    this.input.value2 = Number(prompt("Enter the second value")) || 0;
  },
  sum() {
    return this.input.value1 + this.input.value2;
  },
  mul() {
    return this.input.value1 * this.input.value2;
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

module.exports = calculator;
