describe("getDateAgo", () => {
  const getDateAgo = (date, days) =>
    new Date(date.getTime() - days * 24 * 60 * 60 * 1000).getDate();

  it("1 day before 02.01.2015 -> day 1", () => {
    expect(getDateAgo(new Date(2015, 0, 2), 1)).toBe(1);
  });

  it("2 days before 02.01.2015 -> day 31", () => {
    expect(getDateAgo(new Date(2015, 0, 2), 2)).toBe(31);
  });

  it("100 days before 02.01.2015 -> day 24", () => {
    expect(getDateAgo(new Date(2015, 0, 2), 100)).toBe(24);
  });

  it("365 days before 02.01.2015 -> day 2", () => {
    expect(getDateAgo(new Date(2015, 0, 2), 365)).toBe(2);
  });

  it("does not modify the given date", () => {
    let date = new Date(2015, 0, 2);
    let dateCopy = new Date(date);
    getDateAgo(dateCopy, 100);
    expect(date.getTime()).toBe(dateCopy.getTime());
  });
});
