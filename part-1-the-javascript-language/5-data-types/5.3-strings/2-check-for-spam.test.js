checkSpam = require("./2-check-for-spam");

describe("checkSpam", function() {
  it('finds spam in "buy ViAgRA now"', function() {
    expect(checkSpam("buy ViAgRA now")).toBe(true);
  });

  it('finds spam in "free xxxxx"', function() {
    expect(checkSpam("free xxxxx")).toBe(true);
  });

  it('no spam in "innocent rabbit"', function() {
    expect(checkSpam("innocent rabbit")).toBe(false);
  });
});
