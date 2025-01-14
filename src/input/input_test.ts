import { TestInputType } from "../types/index.type";

const testCases: TestInputType[] = [
  {
    roomSize: [5, 5],
    positionWithOrientation: [1, 2, "N"],
    commands: "RFRFFRFRF",
  },
  {
    roomSize: [5, 5],
    positionWithOrientation: [0, 0, "E"],
    commands: "RFLFFLRF",
  },
  {
    roomSize: [7, 5],
    positionWithOrientation: [0, 0, "E"],
    commands: "rFLFFLRFrfffLf",
  },
];
export default testCases;
