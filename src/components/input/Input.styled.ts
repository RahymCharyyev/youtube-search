import styled from "styled-components";

const InputWrapper = styled("div")`
  max-width: 100%;
`;
const Label = styled("label")`
  display: flex;
  flex-direction: column;
  color: #1717194d;
  position: relative;
`;

const Input = styled("input")`
  height: 24px;
  border-radius: 10px;
  padding: 12px 15px;
  border: 1px solid #17171933;
  &:focus {
    outline-color: #1390e5;
    background-color: rgba(197, 228, 249, 0.3);
  }
`;

const Button = styled("button")`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 33px;
  right: 10px;
  ${Input}:focus + & {
    filter: invert(0.5) sepia(1) saturate(5) hue-rotate(175deg);
  }
`;
const Error = styled("p")`
  /* width: 50%; */
  white-space: pre-wrap;
  text-align: left;
  color: red;
  margin: 2px 0;
`;

const Img = styled("img")``;

const InputStyled = { InputWrapper, Label, Input, Button, Error, Img };

export default InputStyled;
