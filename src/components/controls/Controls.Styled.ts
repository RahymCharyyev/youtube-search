import styled from "styled-components";

interface ControlsProps {
  layout: `card` | `row`;
  buttonLayout: `card` | `row`;
}

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
  color: red;
  font-size: 24px;
`;

const Title = styled("p")``;

const Text = styled("p")`
  color: #1717194d;
`;

const Button = styled("button")<ControlsProps>(({ layout, buttonLayout }) =>
  layout === buttonLayout
    ? `
  cursor: pointer;
  color: black;
  background: none;
  border: none;
  width: 10px;
`
    : `
  cursor: pointer;
  color: #1717194D;
  background: none;
  border: none;
  width: 10px;
}
  `
);

const ControlsStyled = { Main, Left, Right, Text, Title, Button };

export default ControlsStyled;
