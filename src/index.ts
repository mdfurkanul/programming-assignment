import {
  orientationType,
  commandType,
  commandsType,
  TestInputType,
  positionWithOrientationType,
} from "./types/index.type";
import testCases from "./input/input_test";
import { error } from "console";

/* Asign the nacecsary variables */

const robotPositionWithOrientation: positionWithOrientationType = {
  wide: 0,
  deep: 0,
  orientation: "N",
};

/* Check if the commands contains invalid command */
function commandsValidation(commands: commandsType): boolean {
  const pattern: RegExp = /^[LFR]+$/;
  return pattern.test(commands);
}
/* By given command L or R, change the robot orientation */
function rotationLeftRight(
  command: commandType,
  orientation: orientationType
): orientationType {
  const all_direction: orientationType[] = ["N", "E", "S", "W"];

  if (command !== "R" && command !== "L") {
    throw new Error("Invalid command. Only R/L are valid");
  }
  if (!all_direction.includes(orientation)) {
    throw new Error("Invalid direction. Only N/E/S/W are valid");
  }

  const current_direction_index: number = all_direction.indexOf(orientation);
  switch (command) {
    case "R": {
      return all_direction[(current_direction_index + 1) % 4];
    }
    case "L": {
      return all_direction[(current_direction_index + 3) % 4];
    }
  }
}

/* By given command F, Move the robot forward */
function moveForward(command: commandType) {}

(() => {
  testCases.forEach((testCase) => {});
})();

export { commandsValidation, rotationLeftRight };
