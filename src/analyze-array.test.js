import analyzeArray from "./analyze-array";

describe("analyzeArray", () => {
  test("exists", () => {
    expect(analyzeArray).toBeDefined();
  });

  test("returns an object", () => {
    expect(typeof analyzeArray()).toBe("object");
  });

  const hasProps = ["average", "min", "max", "length"];

  hasProps.forEach((propName) => {
    test(`has ${propName} property`, () => {
      expect(analyzeArray()[propName]).toBeDefined();
    });
  });

  const testCases = [
    {
      input: [1, 8, 3, 4, 2, 6],
      actual: analyzeArray([1, 8, 3, 4, 2, 6]),
      expected: {
        average: 4,
        min: 1,
        max: 8,
        length: 6,
      },
    },
    {
      input: [9, 4, 6, 7, 10],
      actual: analyzeArray([9, 4, 6, 7, 10]),
      expected: {
        average: 7.2,
        min: 4,
        max: 10,
        length: 5,
      },
    },
    {
      input: [21, 17, 13, 2],
      actual: analyzeArray([21, 17, 13, 2]),
      expected: {
        average: 13.25,
        min: 2,
        max: 21,
        length: 4,
      },
    },
  ];

  testCases.forEach((testCase, index) => {
    test(`analyzes array (${index + 1})`, () => {
      expect(testCase.actual).toEqual(testCase.expected);
    });
  });
});
