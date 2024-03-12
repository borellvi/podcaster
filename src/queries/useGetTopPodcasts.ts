import { useQuery } from "@tanstack/react-query";
import { UseGetTopPodcastsResponse } from "./useGetTopPodcasts.types";

export const useGetTopPodcasts = () => {
  return useQuery<UseGetTopPodcastsResponse>({
    queryKey: ["topPodcasts"],
    queryFn: async () => {
      const response = await fetch(
        "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
      );
      const data = await response.json();
      return data.feed;
    },
    staleTime: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
  });
};
