import { useRecoilState } from "recoil";
import { pointsAtom } from "./../state/points/pointsAtom";
import { useEffect } from "react";
const useContextMenu = () => {
  const [points, setPoints] = useRecoilState(pointsAtom);
  useEffect(() => {
    const handleClick = () => setPoints({ x: 0, y: 0 });
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return {
    points,
    setPoints,
  };
};
export default useContextMenu;
