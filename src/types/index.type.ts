type orientation = "N" | "E" | "S" | "W";

type commandType = "R" | "L" | "F";

type commandsType = string;

interface TestInputType {
  roomSize: [number, number];
  positionWithOrientation: [number, number, orientation];
  commands: commandsType;
}

interface positionWithOrientationType {
  wide: number;
  deep: number;
  orientation: orientation;
}

export {
  orientation,
  commandType,
  commandsType,
  TestInputType,
  positionWithOrientationType,
};
