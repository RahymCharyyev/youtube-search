import styled from "styled-components";

interface CardsWrapper {
  layout: `card` | `row`;
}

interface TitleProps {
  hasData: boolean;
}

const Main = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const Title = styled("div")<TitleProps>(
  ({ hasData }) => `
  font-size: 36px;
  text-align: center;
  margin-top: 30vh;
  transition: all 0.4s;
  font-family: 'Rubik';
  font-weight: bold;
${hasData && ` margin-top: 30px;`}
  @media screen and (max-width: 885px) {
  font-size: 32px;
  }
  @media screen and (max-width: 710px) {
    font-size: 28px;
  }
  @media screen and (max-width: 560px) {
    font-size: 22px;
  } 
`
);

const CardsWrapper = styled("div")<CardsWrapper>(
  ({ layout }) =>
    layout === "card"
      ? `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  `
      : `
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  () => `.video-link {
    text-decoration: none;
  }`
);

const HomeStyled = { Main, Title, CardsWrapper };

export default HomeStyled;
