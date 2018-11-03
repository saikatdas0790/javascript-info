extractCurrencyValue = require("./4-extract-the-money");

describe("extractCurrencyValue", function() {
  it("for the string $120 returns the number 120", function() {
    expect(extractCurrencyValue("$120")).toBe(120);
  });
});
