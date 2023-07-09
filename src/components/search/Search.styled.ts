import styled from "styled-components";

const Main = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Input = styled("input")`
  height: 52px;
  width: 686px;
  font-size: 20px;
  border: 1px solid #17171933;
  border-radius: 10px 0 0 10px;
  outline: none;
  background-color: ${(props) => props.theme.inputColor};
  padding: 0 15px 0 15px;
  caret-color: ${(props) => props.theme.caretColor};
  color: ${(props) => props.theme.textColor};
  &:focus {
    border: 1px solid #1390e5;
  }
  @media screen and (max-width: 885px) {
    width: 500px;
  }
  @media screen and (max-width: 710px) {
    height: 45px;
    width: 400px;
    font-size: 18px;
  }
  @media screen and (max-width: 560px) {
    height: 40px;
    width: 250px;
    font-size: 16px;
  }
`;

const Button = styled("button")`
  height: 54px;
  width: 150px;
  font-size: 20px;
  color: white;
  background-color: #1390e5;
  border: 1px solid #1390e5;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.inputColor};
    border: 1px solid #1390e5;
    color: #1390e5;
  }
  @media screen and (max-width: 710px) {
    height: 47px;
    font-size: 18px;
  }
  @media screen and (max-width: 560px) {
    height: 42px;
    width: 100px;
    font-size: 16px;
  }
`;

const SearchStyled = { Main, Input, Button };

export default SearchStyled;
