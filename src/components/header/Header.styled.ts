import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

interface ILinkProps {
  isactive: string;
}

const Main = styled("div")`
  border-bottom: 1px solid #f1f1f1;
  font-family: "Rubik";
`;

const Logo = styled("img")`
  @media screen and (max-width: 560px) {
    width: 50px;
  }
`;

const Nav = styled("nav")`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 9%;
`;

const Links = styled("div")`
  display: flex;
  align-items: center;
  gap: 50px;
  @media screen and (max-width: 560px) {
    gap: 20px;
  }
`;

const Button = styled("button")`
  background: none;
  border: none;
  font-size: 18px;
  color: #1390e5;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.logoutColor};
  }
  @media screen and (max-width: 560px) {
    font-size: 16px;
  }
`;

const Link = styled(RouterLink)<ILinkProps>`
  display: flex;
  align-items: center;
  gap: 50px;
  text-decoration: none;
  font-size: 18px;
  color: ${(props) => props.theme.channelColor};
  &:hover {
    color: #1390e5;
    border-bottom: 2px solid #1390e5;
    padding: 42px 0;
  }
  &:visited {
    border-bottom: 2px solid #1390e5;
    padding: 42px 0;
  }
  ${({ isactive }) =>
    isactive === "true"
      ? `
    border-bottom: 2px solid #1390e5;
    padding: 42px 0;
    color: #1390e5;
    `
      : ""}
  @media screen and (max-width: 560px) {
    font-size: 16px;
  }
`;

const IconButton = styled("button")`
  background: none;
  border: none;
  cursor: pointer;
`;

const Img = styled("img")`
  @media screen and (max-width: 560px) {
    width: 15px;
  }
`;

const HeaderStyled = { Main, Nav, Links, Link, Button, IconButton, Img, Logo };

export default HeaderStyled;
