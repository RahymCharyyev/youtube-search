import { useRecoilState } from "recoil";
import { pointsAtom } from "./../state/points/pointsAtom";
import { useState, useEffect } from "react";
const useContextMenu = () => {
  const [clicked, setClicked] = useState(false);
  const [points, setPoints] = useRecoilState(pointsAtom);
  useEffect(() => {
    const handleClick = () => setClicked(false);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return {
    clicked,
    setClicked,
    points,
    setPoints,
  };
};
export default useContextMenu;
