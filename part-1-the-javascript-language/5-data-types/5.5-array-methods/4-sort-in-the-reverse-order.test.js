const reverseSorter = require("./4-sort-in-the-reverse-order");

describe("Reverse Sorter", () => {
  it("Sorts in the reverse order", () => {
    let arr = [5, 2, 1, -10, 8];
    expect(reverseSorter(arr)).toEqual([8, 5, 2, 1, -10]);
  });
});
