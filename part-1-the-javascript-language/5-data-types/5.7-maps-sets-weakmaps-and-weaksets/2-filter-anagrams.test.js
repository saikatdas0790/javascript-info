const intersection = (arr1, arr2) => arr1.filter(item => arr2.includes(item));

const getStrippedDownWord = word => [...word.toLowerCase()].sort().join("");

const aclean = arr => {
  const mapForAllWords = new Map();
  arr.map(word => mapForAllWords.set(getStrippedDownWord(word), word));

  return [...mapForAllWords.values()];
};

describe("aclean", function() {
  it("returns exactly 1 word from each anagram set", function() {
    let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

    let result = aclean(arr);
    expect(result.length).toBe(3);

    expect(intersection(result, ["nap", "PAN"]).length).toBe(1);
    expect(
      intersection(result, ["teachers", "cheaters", "hectares"]).length
    ).toBe(1);
    expect(intersection(result, ["ear", "era"]).length).toBe(1);
  });

  it("is case-insensitive", function() {
    let arr = ["era", "EAR"];
    expect(aclean(arr).length).toBe(1);
  });
});
