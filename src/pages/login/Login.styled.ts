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
  border: 1px solid ${(props) => props.theme.loginColor};
  border-radius: 10px;
  @media screen and (max-width: 710px) {
    width: 450px;
    height: 460px;
  }
  @media screen and (max-width: 560px) {
    width: 350px;
  }
`;

const Img = styled("img")``;

const Title = styled("h1")`
  font-size: 24px;
  font-family: "Rubik";
  font-weight: bold;
  @media screen and (max-width: 560px) {
    font-size: 22px;
  }
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
  @media screen and (max-width: 710px) {
    height: 42px;
    width: 116px;
  }
  @media screen and (max-width: 560px) {
    height: 32px;
    width: 106px;
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
