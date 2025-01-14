import { describe, it, expect } from "vitest";
import { commandsValidation } from "..";

describe("commandsValidation", () => {
  it("shoud return True for the inputs LFFRRLL", () => {
    expect(commandsValidation("LFFRRLL")).toBeTruthy;
  });

  it("shoud return True for the inputs LFFRwRLL", () => {
    expect(commandsValidation("LFFRRLL")).toBeFalsy;
  });
});
