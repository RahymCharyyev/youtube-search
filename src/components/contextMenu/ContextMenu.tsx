import { useRecoilValue } from "recoil";
import Styled from "./ContextMenu.styled";
import { pointsAtom } from "state/points/pointsAtom";
import { getLocalStorage } from "utils/getLocalStorage";
import { setLocalStorage } from "utils/setLocalStorage";

interface ContextMenuProps {
  videoInfo: {
    img: string;
    title: string;
    channel: string;
    videoId: string;
  };
}

const ContextMenu = (props: ContextMenuProps) => {
  const { videoInfo } = props;
  const points = useRecoilValue(pointsAtom);

  const handleAddToFav = () => {
    const favorites = getLocalStorage("YTS-favorites");

    if (favorites !== null) {
      setLocalStorage("YTS-favorites", [...favorites, videoInfo]);
    } else {
      setLocalStorage("YTS-favorites", [videoInfo]);
    }
  };

  return (
    <Styled.Main x={points.x} y={points.y}>
      <Styled.Link
        href={`https://www.youtube.com/watch?v=${videoInfo.videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="video-link"
      >
        Открыть в новой вкладке
      </Styled.Link>
      <Styled.Button onClick={handleAddToFav}>
        Добавить в избранное
      </Styled.Button>
    </Styled.Main>
  );
};

export default ContextMenu;
