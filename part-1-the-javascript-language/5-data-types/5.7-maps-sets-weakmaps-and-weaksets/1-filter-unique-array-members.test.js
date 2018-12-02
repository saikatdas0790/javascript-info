describe("unique", () => {
  const unique = arr => [...new Set(arr).keys()];

  it("removes non-unique elements", function() {
    let strings = [
      "Hare",
      "Krishna",
      "Hare",
      "Krishna",
      "Krishna",
      "Krishna",
      "Hare",
      "Hare",
      ":-O"
    ];

    expect(unique(strings)).toEqual(["Hare", "Krishna", ":-O"]);
  });

  it("does not change the source array", function() {
    let strings = ["Krishna", "Krishna", "Hare", "Hare"];
    unique(strings);
    expect(strings).toEqual(["Krishna", "Krishna", "Hare", "Hare"]);
  });
});
