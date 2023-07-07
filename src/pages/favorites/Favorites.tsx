import Card from "components/card/Card";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { layoutAtom } from "state/layout/layoutAtom";
import { getLocalStorage } from "utils/getLocalStorage";
import { setLocalStorage } from "utils/setLocalStorage";

interface LocalVideos {
  img: string;
  title: string;
  channel: string;
  videoId: string;
}

const Favorites = () => {
  const layout = useRecoilValue(layoutAtom);
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
        <div>Loading...</div>
      ) : (
        videos.map((video: LocalVideos, index) => (
          <div key={`video-card-${index}`}>
            <Card
              img={video.img}
              title={video.title}
              channel={video.channel}
              layout={layout}
              videoId={video.videoId}
            />
            <button onClick={() => handleDelete(video.videoId)}>Удалить</button>
          </div>
        ))
      )}
    </>
  );
};

export default Favorites;
