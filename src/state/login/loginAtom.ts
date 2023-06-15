import { atom } from "recoil";

interface ILoginAtom {
  userName: string;
  password: string;
}

export const loginAtom = atom<ILoginAtom>({
  key: "loginInput",
  default: {
    userName: "",
    password: "",
  },
});
