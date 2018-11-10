const copySortedArray = require("./5-copy-and-sort-array");

describe("Copy Sorted Array", () => {
  it("Sorts and makes a copy of an array", () => {
    let arr = ["HTML", "JavaScript", "CSS"];
    expect(copySortedArray(arr)).toEqual(["CSS", "HTML", "JavaScript"]);
  });
});
