import styled from "styled-components";

interface MainProps {
  x: number;
  y: number;
}

const Main = styled("div")<MainProps>(
  ({ x, y }) => `
position: absolute;
display: flex;
flex-direction: column;
background-color: white;
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
  color: black;
  font-size: 18px;
  padding: 10px 20px;
  font-weight: normal;

  &:hover {
    background-color: #c5e4f9;
    border-radius: 10px 10px 0 0;
  }
`;

const Button = styled("button")`
  text-decoration: none;
  font-weight: normal;
  color: black;
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
  padding: 10px 20px;
  text-align: left;
  &:hover {
    background-color: #c5e4f9;
    border-radius: 0 0 10px 10px;
  }
`;

const ContextMenuStyled = { Main, Link, Button };

export default ContextMenuStyled;
