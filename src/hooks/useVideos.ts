import { useRecoilState } from "recoil";
import { getVideos } from "api/videos";
import { useQuery } from "@tanstack/react-query";
import { searchInputAtom } from "state/input/searchInputAtom";
import { toast } from "react-hot-toast";

export const useVideos = () => {
  const [searchInput] = useRecoilState(searchInputAtom);

  const { data, isFetching, refetch } = useQuery(
    ["videos"],
    () => getVideos(searchInput.input),
    {
      enabled: searchInput.isActive,
      onError() {
        // alert("Error with your connection");
        toast.error("Error with your connection");
      },
      refetchOnWindowFocus: false,
    }
  );

  return { data, isFetching, refetch };
};
