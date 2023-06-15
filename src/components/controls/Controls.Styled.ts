import styled from "styled-components";

const Main = styled("div")`
  width: 1040px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Left = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const Right = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Title = styled("p")``;

const Text = styled("p")`
  color: #1717194d;
`;

const Img = styled("img")`
  cursor: pointer;
`;

const ControlsStyled = { Main, Left, Right, Text, Title, Img };

export default ControlsStyled;
