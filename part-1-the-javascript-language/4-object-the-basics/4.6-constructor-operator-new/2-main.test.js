Accumulator = require("./2-main");

describe("Accumulator", function() {
  it("initial value is the argument of the constructor", function() {
    let accumulator = new Accumulator(1);

    expect(accumulator.value).toBe(1);
  });
});
