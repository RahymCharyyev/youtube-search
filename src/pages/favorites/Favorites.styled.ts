import styled from "styled-components";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 0 9%;
  font-size: 36px;
  margin-top: 20px;
  text-decoration: none;
`;

const Button = styled("button")`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 18px;
  color: #1390e5;
  &:hover {
    color: ${(props) => props.theme.hoverColor};
  }
`;

const FavoritesStyled = {
  Wrapper,
  Button,
};

export default FavoritesStyled;
