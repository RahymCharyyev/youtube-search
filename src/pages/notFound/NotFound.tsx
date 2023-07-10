import { useTranslation } from "react-i18next";
import Styled from "./NotFound.styled";

const NotFound = ({ text }: { text: string }) => {
  const { t } = useTranslation();
  return (
    <Styled.Main>
      <Styled.Text>{text}</Styled.Text>
      <Styled.Button to={"/"}>{t("toMain")}</Styled.Button>
    </Styled.Main>
  );
};

export default NotFound;
