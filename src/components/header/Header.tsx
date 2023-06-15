import { useLocation, useNavigate } from "react-router-dom";
import Styled from "./Header.styled";
import Logo from "assets/logo.svg";

const Header = () => {
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
          <img src={Logo} alt="Logo" width="80px" />
          <Styled.Link to="/" isactive={String(pathname === "/")}>
            Поиск
          </Styled.Link>
          <Styled.Link
            to="/favorites"
            isactive={String(pathname === "/favorites")}
          >
            Избранное
          </Styled.Link>
        </Styled.Links>
        <Styled.Button onClick={logout}>Выйти</Styled.Button>
      </Styled.Nav>
    </Styled.Main>
  );
};

export default Header;
