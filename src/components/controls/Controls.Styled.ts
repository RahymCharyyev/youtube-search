import styled, { DefaultTheme } from "styled-components";

interface ControlsProps {
  layout: `card` | `row`;
  buttonLayout: `card` | `row`;
  theme: DefaultTheme;
}

const Main = styled("div")`
  width: 1040px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Rubik";
  font-weight: bold;
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
  color: red;
  font-size: 24px;
`;

const Title = styled("p")``;

const Text = styled("p")`
  color: ${(props) => props.theme.channelColor};
`;

const Button = styled.button<ControlsProps>`
  cursor: pointer;
  color: ${(props) => props.theme.textColor};
  background: none;
  border: none;
  width: 10px;

  ${({ layout, buttonLayout }) =>
    layout !== buttonLayout &&
    `
    color: grey;
  `}
`;
const ControlsStyled = { Main, Left, Right, Text, Title, Button };

export default ControlsStyled;
