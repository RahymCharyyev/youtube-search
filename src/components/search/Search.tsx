import { ChangeEvent } from "react";
import { searchInputAtom } from "state/input/searchInputAtom";
import Styled from "./Search.styled";
import { useRecoilState } from "recoil";
import { useVideos } from "hooks/useVideos";

const Search = () => {
  const [searchInput, setSearchInput] = useRecoilState(searchInputAtom);
  const { refetch, isLoading } = useVideos();

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput({ ...searchInput, input: event.target.value });
  };

  const handleSubmit = () => {
    if (searchInput.isActive) refetch();
    else setSearchInput({ ...searchInput, isActive: true });
  };
  return (
    <>
      <Styled.Main>
        <Styled.Input
          type="text"
          placeholder="Что хотите посмотреть?"
          onChange={handleInput}
          value={searchInput.input}
        />
        <Styled.Button onClick={handleSubmit}>Найти</Styled.Button>
      </Styled.Main>
    </>
  );
};

export default Search;
