import Styled from "./Favorites.styled";
import Card from "components/card/Card";
import NotFound from "pages/notFound/NotFound";
import { useEffect, useState } from "react";
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
        <NotFound
          text="Список избранных пуст. Добавьте видео в список через контекстное меню,
          нажав правую кнопку мыши на понравившемся видео"
        />
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
              Удалить
            </Styled.Button>
          </Styled.Wrapper>
        ))
      )}
    </>
  );
};

export default Favorites;
