import axiosInstance from "api/axiosInstance";
import { AxiosResponse } from "axios";
import { API_KEY } from "constants/api";
import { IVideoResponse } from "types/videos";

export const getVideos = async (query: string) => {
  const { data }: AxiosResponse<IVideoResponse> = await axiosInstance.get(
    "/search",
    {
      method: "GET",
      params: {
        key: API_KEY,
        part: "snippet",
        q: query,
        maxResults: 12,
      },
    }
  );
  return data;
};
