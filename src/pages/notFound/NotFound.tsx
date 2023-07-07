import Styled from "./NotFound.styled";

const NotFound = () => {
  return (
    <Styled.Main>
      <Styled.Text>Упс, такой страницы не существует :)</Styled.Text>
      <Styled.Button to={"/"}>На главную </Styled.Button>
    </Styled.Main>
  );
};

export default NotFound;
