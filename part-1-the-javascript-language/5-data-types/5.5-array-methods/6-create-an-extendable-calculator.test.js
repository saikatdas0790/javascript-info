const Calculator = require("./6-create-an-extendable-calculator");

describe("Calculator", function() {
  let calculator;

  beforeAll(function() {
    calculator = new Calculator();
  });

  it("calculate(12 + 34) = 46", function() {
    expect(calculator.calculate("12 + 34")).toBe(46);
  });

  it("calculate(34 - 12) = 22", function() {
    expect(calculator.calculate("34 - 12")).toBe(22);
  });

  it("add multiplication: calculate(2 * 3) = 6", function() {
    calculator.addMethod("*", (a, b) => a * b);
    expect(calculator.calculate("2 * 3")).toBe(6);
  });

  it("add power: calculate(2 ** 3) = 8", function() {
    calculator.addMethod("**", (a, b) => a ** b);
    expect(calculator.calculate("2 ** 3")).toBe(8);
  });
});
