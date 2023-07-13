import { useRecoilValue } from "recoil";
import Styled from "./ContextMenu.styled";
import { pointsAtom } from "state/points/pointsAtom";
import { getLocalStorage } from "utils/getLocalStorage";
import { setLocalStorage } from "utils/setLocalStorage";
import { useTranslation } from "react-i18next";
import { videoInfoAtom } from "state/videoInfo/videoInfoAtom";
import { useLocation } from "react-router-dom";

const ContextMenu = () => {
  const videoInfo = useRecoilValue(videoInfoAtom);
  const points = useRecoilValue(pointsAtom);
  const { t } = useTranslation();
  const location = useLocation();

  if (location.pathname === "/favorites") {
    return null;
  }

  const handleAddToFav = () => {
    const favorites = getLocalStorage("YTS-favorites");
    if (favorites !== null) {
      setLocalStorage("YTS-favorites", [...favorites, videoInfo]);
    } else {
      setLocalStorage("YTS-favorites", [videoInfo]);
    }
    console.log(videoInfo);
  };

  return (
    <Styled.Main x={points.x} y={points.y}>
      <Styled.Link
        href={`https://www.youtube.com/watch?v=${videoInfo.videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="video-link"
      >
        {t("openNewTab")}
      </Styled.Link>
      <Styled.Button onClick={handleAddToFav}>{t("addToFav")}</Styled.Button>
    </Styled.Main>
  );
};

export default ContextMenu;
