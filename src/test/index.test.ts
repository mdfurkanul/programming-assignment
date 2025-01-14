import { describe, it, expect } from "vitest";
import { commandsValidation, rotationLeftRight } from "..";

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
