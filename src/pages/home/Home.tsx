import { useMutation } from "react-query";
import Styled from "./Home.styled";
import Search from "components/search/Search";
import { getVideos } from "api/videos";
import { useEffect } from "react";
import Card from "components/card/Card";
import { IItems } from "types/videos";

const Home = () => {
  const { data, mutate, isLoading } = useMutation(
    (query: string) => getVideos(query),
    {
      onError() {
        alert("Huy");
      },
    }
  );

  useEffect(() => {
    mutate("messi");
  }, []);

  return (
    <>
      <Styled.Main>
        <Styled.Title>Поиск видео</Styled.Title>
        <Search />
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
