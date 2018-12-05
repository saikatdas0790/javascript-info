describe("inArray", () => {
  let arr = [1, 2, 3, 4, 5, 6, 7];

  const inArray = arr => element => arr.includes(element);
  it("returns the filter for values in array", () => {
    let filter = inArray(arr);
    expect(filter(5)).toBe(true);
    expect(filter(0)).toBe(false);
  });
});

describe("inBetween", () => {
  const inBetween = (min, max) => element => element >= min && element <= max;
  it("returns the filter for values between", () => {
    let filter = inBetween(3, 6);
    expect(filter(5)).toBe(true);
    expect(filter(0)).toBe(false);
  });
});
