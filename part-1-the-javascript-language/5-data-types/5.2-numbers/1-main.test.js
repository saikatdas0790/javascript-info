random = require("./1-main");

describe("random number generator between a min and max", () => {
  test("run the random generator 10 times", () => {
    for (let index = 0; index < 10; index++) {
      const tempRun = random(index, 9);
      expect(tempRun).toBeGreaterThanOrEqual(index);
      expect(tempRun).toBeLessThanOrEqual(9);
    }
  });
});
