type orientation = "N" | "E" | "S" | "W";

type command = "R" | "L" | "F";

type commands = string;

interface TestInput {
  roomSize: [number, number];
  positionWithOrientation: [number, number, orientation];
  commands: commands;
}

interface positionWithOrientationType {
  wide: number;
  deep: number;
  orientation: orientation;
}

export {
  orientation,
  command,
  commands,
  TestInput,
  positionWithOrientationType,
};
