import Styled from "./Home.styled";
import Search from "components/search/Search";
import Card from "components/card/Card";
import Controls from "components/controls/Controls";
import { IItems } from "types/videos";
import { useVideos } from "hooks/useVideos";

const Home = () => {
  const { data } = useVideos();
  console.log({ data });

  return (
    <>
      <Styled.Main>
        <Styled.Title>Поиск видео</Styled.Title>
        <Search />
        {data && <Controls />}
        <Styled.CardsWrapper>
          {data?.items.map((video: IItems, index) => (
            <Card
              key={`videos-card-${index}`}
              img={video.snippet.thumbnails.default.url}
              title={video.snippet.title}
              channel={video.snippet.channelTitle}
            />
          ))}
        </Styled.CardsWrapper>
      </Styled.Main>
    </>
  );
};

export default Home;
