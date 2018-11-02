ladder = require("./2-main");

describe("Ladder", () => {
  beforeEach(() => {
    ladder.step = 0;
  });

  test("up() should return this", () => {
    expect(ladder.up()).toBe(ladder);
  });

  test("down() should return this", () => {
    expect(ladder.down()).toBe(ladder);
  });

  test("up() should increase step", () => {
    expect(ladder.up().up().step).toBe(2);
  });

  test("down() should decrease step", () => {
    expect(ladder.down().step).toBe(-1);
  });

  test("down().up().up().up() ", () => {
    expect(
      ladder
        .down()
        .up()
        .up()
        .up().step
    ).toBe(2);
  });

  afterAll(() => {
    ladder.step = 0;
  });
});
