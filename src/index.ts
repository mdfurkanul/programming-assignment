import {
  orientationType,
  commandType,
  commandsType,
  roomSizeType,
  TestInputType,
  positionWithOrientationType,
} from "./types/index.type";
import testCases from "./input/input_test";

/* Asign the nacecsary variables */

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
function moveForward(
  position_ori: positionWithOrientationType & { roomSize: roomSizeType }
): [number, number] {
  const { wide, deep, orientation, roomSize } = position_ori;
  let current_position_x: number = wide;
  let current_position_y: number = deep;
  switch (orientation) {
    case "E":
      current_position_x = wide + 1;
      break;
    case "W":
      current_position_x = wide - 1;
      break;
    case "N":
      current_position_y = deep - 1;
      break;
    case "S":
      current_position_y = deep + 1;
      break;
    default:
      break;
  }
  if (
    current_position_x < 0 ||
    current_position_x > roomSize[0] - 1 ||
    current_position_y < 0 ||
    current_position_y > roomSize[1] - 1
  ) {
    throw new Error("Robot out of boundary");
  }
  return [current_position_x, current_position_y];
}

function commandExecute(testCase: TestInputType): positionWithOrientationType {
  let { roomSize, positionWithOrientation, commands } = testCase;
  const robotPositionWithOrientation: positionWithOrientationType = {
    wide: positionWithOrientation[0],
    deep: positionWithOrientation[1],
    orientation: positionWithOrientation[2],
  };
  if (!commandsValidation(commands)) {
    throw new Error("Invalid commands");
  }
  for (let command of commands.toLocaleUpperCase()) {
    if (command === "R" || command === "L") {
      robotPositionWithOrientation.orientation = rotationLeftRight(
        command,
        robotPositionWithOrientation.orientation
      );
    } else {
      let [x, y] = moveForward({
        ...robotPositionWithOrientation,
        roomSize: roomSize,
      });
      robotPositionWithOrientation.wide = x;
      robotPositionWithOrientation.deep = y;
    }
  }
  return robotPositionWithOrientation;
}

(() => {
  testCases.forEach((testCase: TestInputType) => {
    try {
      let { wide, deep, orientation } = commandExecute(testCase);
      console.log(`${testCase.roomSize[0]} ${testCase.roomSize[1]}`);
      console.log(
        `${testCase.positionWithOrientation[0]} ${testCase.positionWithOrientation[1]} ${testCase.positionWithOrientation[2]}`
      );
      console.log(testCase.commands);
      console.log(`Report: ${wide} ${deep} ${orientation}`);
    } catch (error) {
      console.log("Error log:", error);
    }
  });
})();

export { commandsValidation, rotationLeftRight, moveForward };
