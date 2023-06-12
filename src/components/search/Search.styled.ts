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
  padding: 0 0 0 15px;
  &:focus {
    outline-color: #1390e5;
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
    background-color: white;
    border: 1px solid #1390e5;
    color: #1390e5;
  }
`;

const SearchStyled = { Main, Input, Button };

export default SearchStyled;
