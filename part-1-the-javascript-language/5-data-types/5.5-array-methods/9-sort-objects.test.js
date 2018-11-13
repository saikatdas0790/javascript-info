describe("Sort by Name", () => {
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };

  let arr = [john, pete, mary];

  let sortByName = arr =>
    arr.sort((a, b) => a.name > b.name).map(user => user.name.toLowerCase());

  it("Sorts by Name", () => {
    expect(sortByName(arr)).toEqual(["john", "mary", "pete"]);
  });
});
