describe("getWeekDay", () => {
  const dayAbbreviations = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  const getWeekDay = dateObject => dayAbbreviations[dateObject.getDay()];

  it("3 January 2014 - friday", () => {
    expect(getWeekDay(new Date(2014, 0, 3))).toBe("FR");
  });

  it("4 January 2014 - saturday", () => {
    expect(getWeekDay(new Date(2014, 0, 4))).toBe("SA");
  });

  it("5 January 2014 - sunday", () => {
    expect(getWeekDay(new Date(2014, 0, 5))).toBe("SU");
  });

  it("6 January 2014 - monday", () => {
    expect(getWeekDay(new Date(2014, 0, 6))).toBe("MO");
  });

  it("7 January 2014 - tuesday", () => {
    expect(getWeekDay(new Date(2014, 0, 7))).toBe("TU");
  });

  it("8 January 2014 - wednesday", () => {
    expect(getWeekDay(new Date(2014, 0, 8))).toBe("WE");
  });

  it("9 January 2014 - thursday", () => {
    expect(getWeekDay(new Date(2014, 0, 9))).toBe("TH");
  });
});
