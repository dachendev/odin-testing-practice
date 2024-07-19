import caesarCipher from "./caesar-cipher";

describe("caesarCipher", () => {
  test("exists", () => {
    expect(caesarCipher).toBeDefined();
  });

  test("wrapping from z to a", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("case preservation", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("preserve non-alphabetic characters", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});
