describe("Filter unique array members", () => {
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

  let unique = arr =>
    arr.reduce((uniqueArray, element) => {
      if (!uniqueArray.includes(element)) uniqueArray.push(element);
      return uniqueArray;
    }, []);

  test("Filter unique array members", () => {
    expect(unique(strings)).toEqual([`Hare`, `Krishna`, `:-O`]);
  });
});
