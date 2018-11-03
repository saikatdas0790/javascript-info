truncate = require("./3-truncate-the-text");

describe("truncate", function() {
  it("truncate the long string to the given length (including the ellipsis)", function() {
    expect(truncate("What I'd like to tell on this topic is:", 20)).toBe(
      "What I'd like to te…"
    );
  });

  it("doesn't change short strings", function() {
    expect(truncate("Hi everyone!", 20)).toBe("Hi everyone!");
  });
});
