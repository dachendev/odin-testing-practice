import calculator from "./calculator";

describe("calculator", () => {
  test("exists", () => {
    expect(calculator).toBeDefined();
  });

  test("calculator is an object", () => {
    expect(typeof calculator).toBe("object");
  });

  const hasMethods = ["add", "subtract", "multiply", "divide"];

  hasMethods.forEach((method) => {
    test(`calculator has ${method} method`, () => {
      expect(calculator[method]).toBeDefined();
    });
  });

  const methodTestCases = {
    add: [
      {
        input: [1, 2],
        actual: calculator.add(1, 2),
        expected: 3,
      },
      {
        input: [3, 3],
        actual: calculator.add(3, 3),
        expected: 6,
      },
      {
        input: [6, 13],
        actual: calculator.add(6, 13),
        expected: 19,
      },
    ],
    subtract: [
      {
        input: [4, 2],
        actual: calculator.subtract(4, 2),
        expected: 2,
      },
      {
        input: [4, 15],
        actual: calculator.subtract(4, 15),
        expected: -11,
      },
      {
        input: [6, 13],
        actual: calculator.subtract(6, 13),
        expected: -7,
      },
    ],
    multiply: [
      {
        input: [4, 2],
        actual: calculator.multiply(4, 2),
        expected: 8,
      },
      {
        input: [4, 15],
        actual: calculator.multiply(4, 15),
        expected: 60,
      },
      {
        input: [6, 13],
        actual: calculator.multiply(6, 13),
        expected: 78,
      },
    ],
    divide: [
      {
        input: [10, 2],
        actual: calculator.divide(10, 2),
        expected: 5,
      },
      {
        input: [20, 10],
        actual: calculator.divide(20, 10),
        expected: 2,
      },
      {
        input: [6, 12],
        actual: calculator.divide(6, 12),
        expected: 0.5,
      },
    ],
  };

  for (const [method, testCases] of Object.entries(methodTestCases)) {
    testCases.forEach((testCase, index) => {
      test(`calculator can ${method} (${index + 1})`, () => {
        expect(testCase.actual).toBe(testCase.expected);
      });
    });
  }
});
