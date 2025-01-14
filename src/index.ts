import {
  orientationType,
  commandType,
  commandsType,
  TestInputType,
  positionWithOrientationType,
} from "./types/index.type";
import testCases from "./input/input_test";

/* Asign the nacecsary variables */

const robotPositionWithOrientation: positionWithOrientationType = {
  wide: 0,
  deep: 0,
  orientation: "N",
};

/* Check if the commands contains invalid command */
function commandsValidation(commands: commandsType) {
  const pattern: RegExp = /^[LFR]+$/;
  return pattern.test(commands);
}
/* By given command L or R, change the robot orientation */
function rotationLeftRight(command: commandType, orientation: orientationType) {
  return;
}

/* By given command F, Move the robot forward */
function moveForward(command: commandType) {}

(() => {
  testCases.forEach((testCase) => {});
})();

export { commandsValidation };
