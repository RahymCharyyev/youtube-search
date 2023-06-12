import styled from "styled-components";

const Main = styled("div")`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const Title = styled("div")`
  font-size: 36px;
  text-align: center;
`;

const CardsWrapper = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  /* margin: 0 200px; */
`;

const HomeStyled = { Main, Title, CardsWrapper };

export default HomeStyled;
