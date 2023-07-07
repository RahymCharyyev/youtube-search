import Styled from "./Controls.Styled";
import { useVideos } from "hooks/useVideos";
import { searchInputAtom } from "state/input/searchInputAtom";
import { useRecoilState } from "recoil";
import { useState, useEffect } from "react";
import { layoutAtom } from "state/layout/layoutAtom";
import { SvgList } from "assets/svg-icons/SvgList";
import { SvgGrid } from "assets/svg-icons/SvgGrid";

const Controls = () => {
  const [layout, setLayout] = useRecoilState(layoutAtom);
  const [query, setQuery] = useState("");
  const [searchInput] = useRecoilState(searchInputAtom);
  const { data } = useVideos();

  const handleChange = (layout: "row" | "card") => {
    setLayout(layout);
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
          <Styled.Button
            layout={layout}
            buttonLayout="row"
            onClick={() => handleChange("row")}
          >
            <SvgList />
          </Styled.Button>
          <Styled.Button
            layout={layout}
            buttonLayout="card"
            onClick={() => handleChange("card")}
          >
            <SvgGrid />
          </Styled.Button>
        </Styled.Right>
      </Styled.Main>
    </>
  );
};

export default Controls;
