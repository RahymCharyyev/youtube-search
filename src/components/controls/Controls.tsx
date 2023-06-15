import Styled from "./Controls.Styled";
import grid from "assets/grid.svg";
import list from "assets/list.svg";
import { useVideos } from "hooks/useVideos";
import { searchInputAtom } from "state/input/searchInputAtom";
import { useRecoilState } from "recoil";

const Controls = () => {
  const [searchInput] = useRecoilState(searchInputAtom);
  const { data } = useVideos();

  const handleChange = () => {
    alert("huy");
  };

  return (
    <>
      <Styled.Main>
        <Styled.Left>
          <Styled.Title>
            Видео по запросу <b> {`«${searchInput.input}»`} </b>
          </Styled.Title>
          <Styled.Text>{data.pageInfo.totalResults}</Styled.Text>
        </Styled.Left>
        <Styled.Right>
          <Styled.Img src={list} alt="" onClick={handleChange} />
          <Styled.Img src={grid} alt="" onClick={handleChange} />
        </Styled.Right>
      </Styled.Main>
    </>
  );
};

export default Controls;
