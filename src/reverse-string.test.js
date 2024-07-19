import reverseString from "./reverse-string";

describe("reverseString", () => {
  test("exists", () => {
    expect(reverseString).toBeDefined();
  });

  const testCases = [
    {
      input: "hello",
      actual: reverseString("hello"),
      expected: "olleh",
    },
    {
      input: "world",
      actual: reverseString("world"),
      expected: "dlrow",
    },
    {
      input: "foo",
      actual: reverseString("foo"),
      expected: "oof",
    },
  ];

  testCases.forEach((testCase) => {
    test("reverses string", () => {
      expect(testCase.actual).toBe(testCase.expected);
    });
  });
});
