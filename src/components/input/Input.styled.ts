import styled from "styled-components";

const InputWrapper = styled("div")`
  max-width: 100%;
`;
const Label = styled("label")`
  display: flex;
  flex-direction: column;
  color: #1717194d;
  position: relative;
  font-family: "Rubik";
  font-weight: normal;
`;

const Input = styled("input")`
  min-width: 335px;
  height: 24px;
  border-radius: 10px;
  font-family: "Rubik";
  font-weight: bold;
  padding: 15px 15px;
  border: 1px solid #17171933;
  outline: none;
  caret-color: ${(props) => props.theme.caretColor};
  background-color: ${(props) => props.theme.inputColor};
  &:focus {
    border: 1px solid #1390e5;
  }
  @media screen and (max-width: 710px) {
    height: 42px;
    width: 116px;
  }
  @media screen and (max-width: 560px) {
    min-width: 280px;
    height: 18px;
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
  white-space: pre-wrap;
  text-align: center;
  color: red;
  margin: 2px 0;
  font-family: "Rubik";
  font-weight: normal;
`;

const Img = styled("img")``;

const InputStyled = { InputWrapper, Label, Input, Button, Error, Img };

export default InputStyled;
