import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Main = styled("div")`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-size: 36px;
`;

const Text = styled("p")`
  font-size: 28px;
  font-family: "Rubik";
  text-align: center;
  padding: 0 9%;
  @media screen and (max-width: 710px) {
    font-size: 22px;
  }
  @media screen and (max-width: 560px) {
    font-size: 18px;
  }
`;

const Button = styled(NavLink)`
  font-size: 20px;
  font-family: "Rubik";
  text-decoration: none;
  color: #1390e5;
  border: 1px solid #1390e5;
  padding: 8px;
  border-radius: 10px;
  transition: 0.3s;
  &:hover {
    color: white;
    background-color: #1390e5;
  }
  @media screen and (max-width: 710px) {
    font-size: 18px;
  }
  @media screen and (max-width: 560px) {
    font-size: 16px;
  }
`;

const LoginStyled = {
  Main,
  Text,
  Button,
};

export default LoginStyled;
