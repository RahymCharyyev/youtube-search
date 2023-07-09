import Styled from "./Home.styled";
import Search from "components/search/Search";
import Card from "components/card/Card";
import Controls from "components/controls/Controls";
import { IItems } from "types/videos";
import { useVideos } from "hooks/useVideos";
import { useRecoilValue } from "recoil";
import { layoutAtom } from "state/layout/layoutAtom";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const layout = useRecoilValue(layoutAtom);
  const { data, isFetching } = useVideos();

  return (
    <>
      <Styled.Main>
        <Styled.Title hasData={Boolean(data)}>Поиск видео</Styled.Title>
        <Search />
        {data && <Controls />}
        {isFetching ? (
          <ClipLoader
            color="#1390e5"
            loading={true}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
            speedMultiplier={0.8}
          />
        ) : (
          <Styled.CardsWrapper layout={layout}>
            {data?.items.map((video: IItems, index) => (
              <Card
                key={`videos-card-${index}`}
                img={video.snippet.thumbnails.default.url}
                title={video.snippet.title}
                channel={video.snippet.channelTitle}
                layout={layout}
                videoId={video.id.videoId}
              />
            ))}
          </Styled.CardsWrapper>
        )}
      </Styled.Main>
    </>
  );
};

export default Home;
