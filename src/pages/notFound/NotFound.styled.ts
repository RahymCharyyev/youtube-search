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
`;

const LoginStyled = {
  Main,
  Text,
  Button,
};

export default LoginStyled;
