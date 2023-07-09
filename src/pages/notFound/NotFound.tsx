import Styled from "./NotFound.styled";

const NotFound = ({ text }: { text: string }) => {
  return (
    <Styled.Main>
      <Styled.Text>{text}</Styled.Text>
      <Styled.Button to={"/"}>На главную </Styled.Button>
    </Styled.Main>
  );
};

export default NotFound;
