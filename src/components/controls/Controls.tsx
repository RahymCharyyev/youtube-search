import Styled from "./Controls.Styled";
import grid from "assets/grid.svg";
import list from "assets/list.svg";
import { useVideos } from "hooks/useVideos";
import { searchInputAtom } from "state/input/searchInputAtom";
import { useRecoilState } from "recoil";
import { useState, useEffect, MouseEvent } from "react";
import { layoutAtom } from "state/layout/layoutAtom";
const Controls = () => {
  const [_, setLayout] = useRecoilState(layoutAtom);
  const [query, setQuery] = useState("");
  const [searchInput] = useRecoilState(searchInputAtom);
  const { data } = useVideos();

  const handleChange = (event: any) => {
    setLayout(event.target.dataset.layout);
  };

  const total = data?.pageInfo.totalResults || "-";

  useEffect(() => {
    setQuery(searchInput.input);
  }, [data]);

  return (
    <>
      <Styled.Main>
        <Styled.Left>
          <Styled.Title>
            Видео по запросу <b> {`«${query}»`} </b>
          </Styled.Title>
          <Styled.Text>{total}</Styled.Text>
        </Styled.Left>
        <Styled.Right>
          <Styled.Img
            src={list}
            alt=""
            data-layout="row"
            onClick={handleChange}
          />
          <Styled.Img
            src={grid}
            alt=""
            data-layout="card"
            onClick={handleChange}
          />
        </Styled.Right>
      </Styled.Main>
    </>
  );
};

export default Controls;
