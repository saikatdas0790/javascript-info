describe("formatDate", () => {
  const formatDate = date => {
    if ((Date.now() - date.getTime()) / 1000 < 1) {
      return "right now";
    } else if ((Date.now() - date.getTime()) / 1000 < 1 * 60) {
      return `${(Date.now() - date.getTime()) / 1000} sec. ago`;
    } else if ((Date.now() - date.getTime()) / 1000 < 1 * 60 * 60) {
      return `${(Date.now() - date.getTime()) / (1000 * 60)} min. ago`;
    } else {
      return `${
        date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`
      }.${
        date.getMonth() + 1 < 10
          ? `0${date.getMonth() + 1}`
          : `${date.getMonth() + 1}`
      }.${date.getFullYear() % 100} ${date.getHours()}:${date.getMinutes()}`;
    }
  };

  it('shows 1ms ago as "right now"', () => {
    expect(formatDate(new Date(new Date() - 1))).toBe("right now");
  });

  it('"30 seconds ago"', () => {
    expect(formatDate(new Date(new Date() - 30 * 1000))).toBe("30 sec. ago");
  });

  it('"5 minutes ago"', () => {
    expect(formatDate(new Date(new Date() - 5 * 60 * 1000))).toBe("5 min. ago");
  });

  it("older dates as DD.MM.YY HH:mm", () => {
    expect(formatDate(new Date(2014, 2, 1, 11, 22, 33))).toBe("01.03.14 11:22");
  });
});
