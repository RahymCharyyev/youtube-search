import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

const Main = styled("div")`
  border-bottom: 1px solid #f1f1f1;
`;
const Nav = styled("nav")`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 200px;
`;

const Links = styled("div")`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Button = styled("button")`
  background: none;
  border: none;
  font-size: 18px;
  color: #1390e5;
  cursor: pointer;
  &:hover {
    color: #2727274d;
  }
`;

const Link = styled(RouterLink)`
  display: flex;
  align-items: center;
  gap: 50px;
  text-decoration: none;
  font-size: 18px;

  color: #2727274d;
  &:hover {
    color: #1390e5;
    border-bottom: 2px solid #1390e5;
    padding: 38px 0;
  }
  &:visited {
    border-bottom: 2px solid #1390e5;
    padding: 38px 0;
  }
`;

const HeaderStyled = { Main, Nav, Links, Link, Button };

export default HeaderStyled;
