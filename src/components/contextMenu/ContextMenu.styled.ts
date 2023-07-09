import styled, { DefaultTheme } from "styled-components";

interface MainProps {
  x: number;
  y: number;
  theme: DefaultTheme;
}

const Main = styled("div")<MainProps>(
  ({ x, y, theme }) => `
position: absolute;
display: flex;
flex-direction: column;
background: ${theme.body};
border: 1px solid rgb(19, 144, 229);
border-radius: 10px;
width: auto;
height: auto;
top: ${y}px;
left: ${x}px;
  ${x === 0 && y === 0 ? `display: none;` : ""}  
`
);

const Link = styled("a")`
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
  font-size: 18px;
  padding: 10px 20px;
  font-family: "Rubik";
  font-weight: normal;
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
    border-radius: 10px 10px 0 0;
  }
`;

const Button = styled("button")`
  text-decoration: none;
  font-family: "Rubik";
  font-weight: normal;
  color: ${(props) => props.theme.textColor};
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
  padding: 10px 20px;
  text-align: left;
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
    border-radius: 0 0 10px 10px;
  }
`;

const ContextMenuStyled = { Main, Link, Button };

export default ContextMenuStyled;
