describe("getLastDayOfMonth", () => {
  const getLastDayOfMonth = (year, month) =>
    new Date(
      new Date(year, month + 1).getTime() - 1000 * 60 * 60 * 24
    ).getDate();

  it("last day of 01.01.2012 - 31", () => {
    expect(getLastDayOfMonth(2012, 0)).toBe(31);
  });

  it("last day of 01.02.2012 - 29 (leap year)", () => {
    expect(getLastDayOfMonth(2012, 1)).toBe(29);
  });

  it("last day of 01.02.2013 - 28", () => {
    expect(getLastDayOfMonth(2013, 1)).toBe(28);
  });
});
