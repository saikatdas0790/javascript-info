describe("sumSalaries", () => {
  const sumSalaries = salaries =>
    Object.values(salaries).reduce((sum, current) => sum + current, 0);
  it("returns sum of salaries", () => {
    let salaries = {
      John: 100,
      Pete: 300,
      Mary: 250
    };

    expect(sumSalaries(salaries)).toBe(650);
  });

  it("returns 0 for the empty object", () => {
    expect(sumSalaries({})).toBe(0);
  });
});
