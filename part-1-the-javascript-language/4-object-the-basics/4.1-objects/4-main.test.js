multiplyNumeric = require("./4-main");

describe("multiplyNumeric", () => {
  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  let result = multiplyNumeric(menu);
  test("multiplies all numeric properties by 2", () => {
    expect(menu.width).toBe(400);
    expect(menu.height).toBe(600);
    expect(menu.title).toBe("My menu");
  });

  test("returns nothing", () => {
    expect(multiplyNumeric({})).toBeUndefined();
  });
});
