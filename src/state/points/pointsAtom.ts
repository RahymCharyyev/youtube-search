import { atom } from "recoil";

interface IPointsAtom {
  x: number;
  y: number;
}

export const pointsAtom = atom<IPointsAtom>({
  key: "pointsAtom",
  default: {
    x: 0,
    y: 0,
  },
});
