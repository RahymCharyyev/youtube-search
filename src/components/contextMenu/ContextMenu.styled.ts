import styled from "styled-components";

interface MainProps {
  x: number;
  y: number;
}

const Main = styled("div")<MainProps>(
  ({ x, y }) => `
  ${x === 0 && y === 0 ? `display:none` : ""}  
position: absolute;
background-color: white;
border: 1px solid rgb(19, 144, 229);
border-radius: 10px;
width: 200px;
height: 100px;
top: ${y}px;
left: ${x}px;
`
);

const ContextMenuStyled = { Main };

export default ContextMenuStyled;
