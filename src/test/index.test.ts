import { describe, it, expect } from "vitest";
import { commandsValidation, rotationLeftRight, moveForward } from "..";

describe("commandsValidation", () => {
  it("shoud return true for the inputs LFFRRLL", () => {
    expect(commandsValidation("LFFRRLL")).toBe(true);
  });

  it("shoud return false for the inputs LFFRwRLL", () => {
    expect(commandsValidation("LFFRwRLL")).toBe(false);
  });
  it("shoud return false for the inputs '' ", () => {
    expect(commandsValidation("")).toBe(false);
  });
  it("shoud return false for the inputs F ", () => {
    expect(commandsValidation("F")).toBe(true);
  });
});

describe("rotationLeftRight", () => {
  it("shoud return S for the inputs are R, E", () => {
    expect(rotationLeftRight("R", "E")).toBe("S");
  });

  it("shoud return W for the inputs are R, S", () => {
    expect(rotationLeftRight("R", "S")).toBe("W");
  });

  it("shoud return E for the inputs are L, S", () => {
    expect(rotationLeftRight("L", "S")).toBe("E");
  });

  it("shoud return error for the inputs are F, S", () => {
    expect(() => rotationLeftRight("F", "S")).toThrow(
      "Invalid command. Only R/L are valid"
    );
  });
  it("shoud return error for the inputs are '', S", () => {
    expect(() => rotationLeftRight("F", "S")).toThrow(
      "Invalid command. Only R/L are valid"
    );
  });
});

describe("moveForward", () => {
  it("should return error", () => {
    expect(() =>
      moveForward({ wide: 1, deep: 2, orientation: "W", roomSize: [1, 1] })
    ).toThrow("Robot out of boundary");
  });

  it("should return return 1,1", () => {
    expect(
      moveForward({ wide: 1, deep: 2, orientation: "N", roomSize: [5, 5] })
    ).toStrictEqual([1, 1]);
  });
  it("should return return 2,2", () => {
    expect(
      moveForward({ wide: 1, deep: 2, orientation: "E", roomSize: [5, 5] })
    ).toStrictEqual([2, 2]);
  });
  it("should return return 2,2", () => {
    expect(
      moveForward({ wide: 2, deep: 2, orientation: "W", roomSize: [5, 5] })
    ).toStrictEqual([1, 2]);
  });
});
