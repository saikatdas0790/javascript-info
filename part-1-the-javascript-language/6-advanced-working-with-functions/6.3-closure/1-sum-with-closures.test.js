describe("sum with closures", () => {
  const sum = a => b => a + b;

  it("sum", () => {
    expect(sum(1)(2)).toBe(3);
    expect(sum(5)(-1)).toBe(4);
  });
});
