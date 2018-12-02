describe("topSalary", () => {
  const topSalary = salaries => {
    let maxSalary = 0;
    let topEarner = null;

    for (const [name, salary] of Object.entries(salaries)) {
      if (salary >= maxSalary) {
        topEarner = name;
        maxSalary = salary;
      }
    }
    return topEarner;
  };

  it("returns top-paid person", () => {
    let salaries = {
      John: 100,
      Pete: 300,
      Mary: 250
    };

    expect(topSalary(salaries)).toBe("Pete");
  });

  it("returns null for the empty object", () => {
    expect(topSalary({})).toBeNull();
  });
});
