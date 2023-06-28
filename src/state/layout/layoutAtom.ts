import { atom } from "recoil";

type LayoutType = "card" | "row";

export const layoutAtom = atom<LayoutType>({
  key: "layoutAtom",
  default: "card",
});
