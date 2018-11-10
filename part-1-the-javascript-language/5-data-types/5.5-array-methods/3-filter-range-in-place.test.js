const filterRangeInPlace = require("./3-filter-range-in-place");

describe("filterRangeInPlace", function() {
  it("returns the filtered values", function() {
    let arr = [5, 3, 8, 1];

    filterRangeInPlace(arr, 1, 4);

    expect(arr).toEqual([3, 1]);
  });

  it("doesn't return anything", function() {
    expect(filterRangeInPlace([1, 2, 3], 1, 4)).toBeUndefined();
  });
});
