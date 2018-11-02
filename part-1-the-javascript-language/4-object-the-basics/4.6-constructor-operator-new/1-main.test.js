Calculator = require("./1-main");

describe("calculator", () => {
  beforeEach(() => {
    calculator = new Calculator();
    calculator.input.value1 = 2;
    calculator.input.value2 = 3;
  });

  test("the sum is 5", () => {
    expect(calculator.sum()).toBe(5);
  });

  test("the multiplication product is 6", () => {
    expect(calculator.mul()).toBe(6);
  });
});
