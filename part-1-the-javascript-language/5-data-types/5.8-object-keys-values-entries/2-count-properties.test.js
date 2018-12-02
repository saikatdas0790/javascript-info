describe("count", () => {
  const count = obj => Object.keys(obj).length;

  it("counts the number of properties", () => {
    expect(count({ a: 1, b: 2 })).toBe(2);
  });

  it("returns 0 for an empty object", () => {
    expect(count({})).toBe(0);
  });

  it("ignores symbolic properties", () => {
    expect(count({ [Symbol("id")]: 1 })).toBe(0);
  });
});
