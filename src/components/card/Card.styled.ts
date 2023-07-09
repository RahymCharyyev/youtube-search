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

`
    : `
    width: 100%;
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
  `
);

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

const CardStyled = { CardWrapper, Title, Channel, Img };

export default CardStyled;
