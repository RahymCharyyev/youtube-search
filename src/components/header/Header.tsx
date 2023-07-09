import { useLocation, useNavigate } from "react-router-dom";
import { DefaultTheme } from "styled-components";
import Styled from "./Header.styled";
import Logo from "assets/logo.svg";
import { lightTheme } from "theme";
import Sun from "assets/sun.svg";
import Moon from "assets/moon.svg";

interface HeaderProps {
  switchTheme: () => void;
  theme: DefaultTheme;
}

const Header = ({ switchTheme, theme }: HeaderProps) => {
  const { pathname } = useLocation();
  const location = useLocation();
  const navigate = useNavigate();
  if (location.pathname === "/login") {
    return null;
  }

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Styled.Main>
      <Styled.Nav>
        <Styled.Links>
          <Styled.Logo src={Logo} alt="Logo" width="80px" />
          <Styled.Link to="/" isactive={String(pathname === "/")}>
            Поиск
          </Styled.Link>
          <Styled.Link
            to="/favorites"
            isactive={String(pathname === "/favorites")}
          >
            Избранное
          </Styled.Link>
          <Styled.IconButton onClick={switchTheme}>
            {theme === lightTheme ? (
              <Styled.Img src={Moon} alt="moon logo" width={30} height={30} />
            ) : (
              <Styled.Img src={Sun} alt="sun logo" width={30} height={30} />
            )}
          </Styled.IconButton>
        </Styled.Links>
        <Styled.Button onClick={logout}>Выйти</Styled.Button>
      </Styled.Nav>
    </Styled.Main>
  );
};

export default Header;
