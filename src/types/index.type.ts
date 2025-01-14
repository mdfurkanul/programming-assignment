type orientationType = "N" | "E" | "S" | "W";

type commandType = "R" | "L" | "F";

type commandsType = string;
type roomSizeType = [number, number];
type TestInputType = {
  roomSize: roomSizeType;
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
  roomSizeType,
  TestInputType,
  positionWithOrientationType,
};
