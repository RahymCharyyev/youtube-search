import { useLocation } from "react-router-dom";
import Styled from "./Footer.styled";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();
  if (location.pathname === "/login") {
    return null;
  }
  return (
    <Styled.Wrapper>
      <Styled.Text>{t("developed")} RC</Styled.Text>
      <Styled.Link href="https://github.com/RahymCharyyev">
        {t("github")}
      </Styled.Link>
    </Styled.Wrapper>
  );
};

export default Footer;
