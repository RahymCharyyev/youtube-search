import { useRecoilState } from "recoil";
import { getVideos } from "api/videos";
import { useQuery } from "@tanstack/react-query";
import { searchInputAtom } from "state/input/searchInputAtom";

export const useVideos = () => {
  const [searchInput] = useRecoilState(searchInputAtom);

  const { data, isLoading, refetch } = useQuery(
    ["videos"],
    () => getVideos(searchInput.input),
    {
      enabled: searchInput.isActive,
      onError() {
        alert("Hi");
      },
    }
  );

  return { data, isLoading, refetch };
};
