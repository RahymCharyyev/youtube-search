import Styled from "./Favorites.styled";
import Card from "components/card/Card";
import NotFound from "pages/notFound/NotFound";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getLocalStorage } from "utils/getLocalStorage";
import { setLocalStorage } from "utils/setLocalStorage";

interface LocalVideos {
  img: string;
  title: string;
  channel: string;
  videoId: string;
}

const Favorites = () => {
  const [videos, setVideos] = useState<LocalVideos[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const localVideos = getLocalStorage("YTS-favorites");
    if (localVideos) setVideos(localVideos);
  }, []);

  const handleDelete = (videoId: string) => {
    const filteredVideos = videos.filter((video) => {
      if (video.videoId !== videoId) return video;
    });
    setVideos(filteredVideos);
    setLocalStorage("YTS-favorites", videos);
  };

  return (
    <>
      {videos.length === 0 ? (
        <NotFound text={t("favNotFound")} />
      ) : (
        videos.map((video: LocalVideos, index) => (
          <Styled.Wrapper key={`video-card-${index}`}>
            <Card
              img={video.img}
              title={video.title}
              channel={video.channel}
              layout={"row"}
              videoId={video.videoId}
            />
            <Styled.Button onClick={() => handleDelete(video.videoId)}>
              {t("delete")}
            </Styled.Button>
          </Styled.Wrapper>
        ))
      )}
    </>
  );
};

export default Favorites;
