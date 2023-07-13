import Styled from "./Controls.Styled";
import { useVideos } from "hooks/useVideos";
import { searchInputAtom } from "state/input/searchInputAtom";
import { useRecoilState } from "recoil";
import { useState, useEffect } from "react";
import { layoutAtom } from "state/layout/layoutAtom";
import { SvgList } from "assets/svg-icons/SvgList";
import { SvgGrid } from "assets/svg-icons/SvgGrid";
import { useTranslation } from "react-i18next";

const Controls = () => {
  const [layout, setLayout] = useRecoilState(layoutAtom);
  const [query, setQuery] = useState("");
  const [searchInput] = useRecoilState(searchInputAtom);
  const { data } = useVideos();
  const { t } = useTranslation();

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
            {t("foundVideo")} <b> {`«${query}»`} </b>
          </Styled.Title>
          <Styled.Text>{total}</Styled.Text>
        </Styled.Left>
        <Styled.Right>
          <select
            name="Количество отображаемых видео"
            id="Количество отображаемых видео"
          >
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
            <option value="48">48</option>
            <option value="60">60</option>
          </select>
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
