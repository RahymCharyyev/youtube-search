import styled from "styled-components";

const Wrapper = styled("form")`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Login = styled("div")`
  width: 510px;
  height: 520px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  border: 1px solid #2727271a;
  border-radius: 10px;
`;

const Img = styled("img")``;

const Title = styled("h1")`
  font-size: 24px;
`;

const Button = styled("button")`
  height: 52px;
  width: 176px;
  border: none;
  border-radius: 5px;
  background: #1390e5;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: white;
  cursor: pointer;
  &:hover {
    color: #1390e5;
    background-color: white;
    border: 1px solid #1390e5;
  }
`;

const LoginStyled = {
  Wrapper,
  Title,
  Img,
  Login,
  Button,
};

export default LoginStyled;
