ucFirst = require("./1-uppercase-the-first-character");

describe("ucFirst", function() {
  it("Uppercases the first symbol", function() {
    expect(ucFirst("john")).toBe("John");
  });

  it("Doesn't die on an empty string", function() {
    expect(ucFirst("")).toBe("");
  });
});
