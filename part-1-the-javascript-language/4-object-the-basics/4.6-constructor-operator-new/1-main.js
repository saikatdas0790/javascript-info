function Calculator() {
  this.input = {};
  this.read = function() {
    this.input.value1 = Number(prompt("Enter the first value")) || 0;
    this.input.value2 = Number(prompt("Enter the second value")) || 0;
  };

  this.sum = function() {
    return this.input.value1 + this.input.value2;
  };

  this.mul = function() {
    return this.input.value1 * this.input.value2;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

module.exports = Calculator;
