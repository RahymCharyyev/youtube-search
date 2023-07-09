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
    display: none;
  }
`;

const Nav = styled("nav")`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 9%;
  @media screen and (max-width: 560px) {
    margin: 0 3%;
  }
`;

const Links = styled("div")`
  display: flex;
  align-items: center;
  gap: 50px;
  @media screen and (max-width: 560px) {
    gap: 10px;
  }
`;

const Button = styled("button")`
  background: none;
  border: none;
  font-size: 18px;
  color: #1390e5;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.channelColor};
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

const Toggles = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media screen and (max-width: 560px) {
    gap: 10px;
  }
`;

const Select = styled("select")`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: #1390e5;
  font-size: 18px;
  @media screen and (max-width: 560px) {
    font-size: 16px;
  }
`;

const Option = styled("option")`
  background: ${(props) => props.theme.body};
  font-size: 18px;
  @media screen and (max-width: 560px) {
    font-size: 16px;
  }
`;

const HeaderStyled = {
  Main,
  Nav,
  Links,
  Link,
  Button,
  IconButton,
  Img,
  Logo,
  Select,
  Option,
  Toggles,
};

export default HeaderStyled;
