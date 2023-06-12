import Styled from "./Search.styled";
const Search = () => {
  return (
    <>
      <Styled.Main>
        <Styled.Input type="text" placeholder="Что хотите посмотреть?" />
        <Styled.Button>Найти</Styled.Button>
      </Styled.Main>
    </>
  );
};

export default Search;
