import styled, { DefaultTheme } from "styled-components";

interface CardWrapperProps {
  layout: "card" | "row";
  theme: DefaultTheme;
}

const CardWrapper = styled.div<CardWrapperProps>(({ layout, theme }) =>
  layout === "card"
    ? `
  width: 245px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media screen and (max-width: 1070px) {
    width: 200px;
    ${Img} {
      width: 157px;
      height: 88px;
    }
  }
    @media screen and (max-width: 410px) {
    width: 157px;
  }

`
    : `
    width: 1100px;
    display: flex;
    gap: 20px;
    padding: 10px;
    ${Img} {
      aspect-ratio: 3/2;
      width: 157px;
      height: 88px;
    }
    border: 1px solid #1390e5;
    border-radius: 10px;
    &:hover {
      background: ${theme.hoverColor};
      color: #000;
    }
    @media screen and (max-width: 1100px) {
      width: 900px;
    }
    @media screen and (max-width: 970px) {
      width: 800px;
    }
    @media screen and (max-width: 860px) {
      width: 700px;
    }
    @media screen and (max-width: 760px) {
      width: 600px;
    }
    @media screen and (max-width: 670px) {
      width: 300px;
    }
  `
);

const Link = styled.a`
  text-decoration: none;
`;

const Img = styled.img`
  border-radius: 10px;
`;

const Title = styled.h2<{ theme: DefaultTheme }>`
  font-size: 14px;
  padding: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
  font-family: "Rubik";
  font-weight: bold;
  color: ${(props) => props.theme.textColor};
`;

const Channel = styled.p<{ theme: DefaultTheme }>`
  font-size: 14px;
  padding: 0;
  margin: 0;
  font-family: "Rubik";
  font-weight: bold;
  margin-top: 10px;
  color: ${(props) => props.theme.channelColor};
`;

const CardStyled = { CardWrapper, Title, Channel, Img, Link };

export default CardStyled;
