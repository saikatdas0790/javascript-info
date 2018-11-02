calculator = require("./1-main");

describe("calculator", () => {
  beforeEach(() => {
    calculator.input.value1 = 2;
    calculator.input.value2 = 3;
  });

  // afterEach(() => {
  //   global.prompt.restore();
  // });

  test("the sum is 5", () => {
    expect(calculator.sum()).toBe(5);
  });

  test("the multiplication product is 6", () => {
    expect(calculator.mul()).toBe(6);
  });
});
