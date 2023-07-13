import { useRecoilState } from "recoil";
import { getVideos } from "api/videos";
import { useQuery } from "@tanstack/react-query";
import { searchInputAtom } from "state/input/searchInputAtom";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

export const useVideos = () => {
  const { t } = useTranslation();
  const [searchInput] = useRecoilState(searchInputAtom);

  const { data, isFetching, refetch } = useQuery(
    ["videos"],
    () => getVideos(searchInput.input),
    {
      enabled: searchInput.isActive,
      onError() {
        toast.error(t("errorConnection"));
      },
      refetchOnWindowFocus: false,
    }
  );

  return { data, isFetching, refetch };
};
