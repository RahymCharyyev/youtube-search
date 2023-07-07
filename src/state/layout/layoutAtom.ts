import { atom } from "recoil";

export type LayoutType = "card" | "row";

export const layoutAtom = atom<LayoutType>({
  key: "layoutAtom",
  default: "card",
});
