import { loginAtom } from "state/login/loginAtom";
import Styled from "./Login.styled";
import { ChangeEvent } from "react";
import logo from "assets/logo.svg";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [login, setLogin] = useRecoilState(loginAtom);
  const navigate = useNavigate();

  const handleName = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, userName: event.target.value });
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, password: event.target.value });
  };

  const handleSubmit = () => {
    if (login.userName && login.password === "admin") {
      localStorage.setItem("token", "true");
      navigate("/");
    } else {
      alert("Имя пользователя или пароль не верны, введите верные данные");
    }
  };
  return (
    <Styled.Wrapper>
      <Styled.Login>
        <Styled.Img src={logo} alt="" width={100} />
        <Styled.Title>Вход</Styled.Title>
        <Styled.InputWrapper>
          <Styled.Label>Логин</Styled.Label>
          <Styled.LoginInput
            type="text"
            onChange={handleName}
            value={login.userName}
          />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Styled.Label>Пароль</Styled.Label>
          <Styled.LoginInput
            type="password"
            onChange={handlePassword}
            value={login.password}
          />
        </Styled.InputWrapper>
        <Styled.Button type="submit" onClick={handleSubmit}>
          Войти
        </Styled.Button>
      </Styled.Login>
    </Styled.Wrapper>
  );
};

export default Login;
