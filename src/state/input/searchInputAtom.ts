import { atom } from "recoil";

interface ISearchAtom {
  input: string;
  isActive: boolean;
}

export const searchInputAtom = atom<ISearchAtom>({
  key: "searchInput",
  default: {
    input: "",
    isActive: false,
  },
});
