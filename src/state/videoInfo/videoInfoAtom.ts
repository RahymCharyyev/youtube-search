import { atom } from "recoil";

interface IVideoInfoAtom {
  img: string;
  title: string;
  channel: string;
  videoId: string;
}

export const videoInfoAtom = atom<IVideoInfoAtom>({
  key: "videoInfoAtom",
  default: {
    img: "",
    title: "",
    channel: "",
    videoId: "",
  },
});
