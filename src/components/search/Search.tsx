import { ChangeEvent, KeyboardEvent } from "react";
import { searchInputAtom } from "state/input/searchInputAtom";
import { useRecoilState } from "recoil";
import { useVideos } from "hooks/useVideos";
import Styled from "./Search.styled";

const Search = () => {
  const [searchInput, setSearchInput] = useRecoilState(searchInputAtom);
  const { refetch, isLoading } = useVideos();

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput({ ...searchInput, input: event.target.value });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key == "Enter") refetch();
  };

  const handleSubmit = () => {
    if (searchInput.isActive) refetch();
    else setSearchInput({ ...searchInput, isActive: true });
  };

  return (
    <>
      <Styled.Main>
        <Styled.Input
          type="search"
          placeholder="Что хотите посмотреть?"
          onChange={handleInput}
          value={searchInput.input}
          onKeyDown={handleKeyDown}
        />
        <Styled.Button onClick={handleSubmit}>Найти</Styled.Button>
      </Styled.Main>
    </>
  );
};

export default Search;
