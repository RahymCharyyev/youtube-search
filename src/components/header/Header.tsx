import Styled from "./Header.styled";
import Logo from "assets/logo.svg";

const Header = () => {
  return (
    <Styled.Main>
      <Styled.Nav>
        <Styled.Links>
          <img src={Logo} alt="Logo" width="80px" />
          <Styled.Link to="/">Поиск</Styled.Link>
          <Styled.Link to="/favorites">Избранное</Styled.Link>
        </Styled.Links>
        <Styled.Button>Выйти</Styled.Button>
      </Styled.Nav>
    </Styled.Main>
  );
};

export default Header;
