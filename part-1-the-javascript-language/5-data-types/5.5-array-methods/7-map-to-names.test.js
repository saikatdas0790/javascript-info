describe("names", () => {
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };

  let users = [john, pete, mary];

  let names = users.map(person => person.name);

  it("Map to names", () => {
    expect(names).toEqual(["John", "Pete", "Mary"]);
  });
});
