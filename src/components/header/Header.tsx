import { useLocation, useNavigate } from "react-router-dom";
import { DefaultTheme } from "styled-components";
import { lightTheme } from "theme";
import { LANGUAGES } from "constants/language";
import { useTranslation } from "react-i18next";
import Styled from "./Header.styled";
import Logo from "assets/logo.svg";
import Sun from "assets/sun.svg";
import Moon from "assets/moon.svg";

interface HeaderProps {
  switchTheme: () => void;
  theme: DefaultTheme;
}

const Header = ({ switchTheme, theme }: HeaderProps) => {
  const { i18n, t } = useTranslation();
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

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <Styled.Main>
      <Styled.Nav>
        <Styled.Links>
          <Styled.Logo src={Logo} alt="Logo" width="80px" />
          <Styled.Link to="/" isactive={String(pathname === "/")}>
            {t("search")}
          </Styled.Link>
          <Styled.Link
            to="/favorites"
            isactive={String(pathname === "/favorites")}
          >
            {t("favorites")}
          </Styled.Link>
          <Styled.IconButton onClick={switchTheme}>
            {theme === lightTheme ? (
              <Styled.Img src={Moon} alt="moon logo" width={30} height={30} />
            ) : (
              <Styled.Img src={Sun} alt="sun logo" width={30} height={30} />
            )}
          </Styled.IconButton>
        </Styled.Links>
        <Styled.Toggles>
          <Styled.Select defaultValue={i18n.language} onChange={onChangeLang}>
            {LANGUAGES.map(({ code, label }) => (
              <Styled.Option key={code} value={code}>
                {label}
              </Styled.Option>
            ))}
          </Styled.Select>
          <Styled.Button onClick={logout}>{t("logout")}</Styled.Button>
        </Styled.Toggles>
      </Styled.Nav>
    </Styled.Main>
  );
};

export default Header;
