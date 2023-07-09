import { useLocation } from "react-router-dom";
import Styled from "./Footer.styled";

const Footer = () => {
  const location = useLocation();
  if (location.pathname === "/login") {
    return null;
  }
  return (
    <Styled.Wrapper>
      <Styled.Text>Разработал: RC</Styled.Text>
      <Styled.Link href="https://github.com/RahymCharyyev">
        Мой GITHUB
      </Styled.Link>
    </Styled.Wrapper>
  );
};

export default Footer;
