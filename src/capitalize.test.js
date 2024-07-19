import capitalize from "./capitalize";

describe("capitalize", () => {
  test("exists", () => {
    expect(capitalize).toBeDefined();
  });

  const testCases = [
    {
      input: "hello",
      actual: capitalize("hello"),
      expected: "Hello",
    },
    {
      input: "world",
      actual: capitalize("world"),
      expected: "World",
    },
    {
      input: "foo",
      actual: capitalize("foo"),
      expected: "Foo",
    },
  ];

  testCases.forEach((testCase) => {
    test("first letter is capitalized", () => {
      expect(testCase.actual).toBe(testCase.expected);
    });
  });
});
