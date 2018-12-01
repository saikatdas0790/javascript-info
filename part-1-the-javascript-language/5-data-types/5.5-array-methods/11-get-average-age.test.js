describe("Get average age", () => {
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 29 };

  let arr = [john, pete, mary];

  let getAverageAge = persons =>
    persons.reduce((sum, current) => sum + current.age, 0) / persons.length;

  test("Average age", () => {
    expect(getAverageAge(arr)).toBe(28);
  });
});
