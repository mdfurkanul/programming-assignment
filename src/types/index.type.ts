type orientationType = "N" | "E" | "S" | "W";

type commandType = "R" | "L" | "F";

type commandsType = string;

type TestInputType = {
  roomSize: [number, number];
  positionWithOrientation: [number, number, orientationType];
  commands: commandsType;
};

type positionWithOrientationType = {
  wide: number;
  deep: number;
  orientation: orientationType;
};

export {
  orientationType,
  commandType,
  commandsType,
  TestInputType,
  positionWithOrientationType,
};
