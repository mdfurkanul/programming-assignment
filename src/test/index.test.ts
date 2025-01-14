import { describe, it, expect } from "vitest";
import { commandsValidation } from "..";

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
