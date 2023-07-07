import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Main = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  color: #1390e5;
`;

const Text = styled("p")`
  font-size: 36px;
  color: #1390e5;
`;

const Button = styled(NavLink)`
  font-size: 20px;
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
