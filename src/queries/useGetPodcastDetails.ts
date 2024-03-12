import { useQuery } from "@tanstack/react-query";
import {
  UseGetTopPodcastsParams,
  UseGetTopPodcastsResponse,
} from "./useGetPodcastDetails.types";

export const useGetPodcastDetails = ({
  podcastId,
}: UseGetTopPodcastsParams) => {
  return useQuery<UseGetTopPodcastsResponse>({
    queryKey: [`podcastsDetails-${podcastId}`],
    queryFn: async () => {
      const response = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
        )}`
      );

      const data = await response.json();

      return JSON.parse(data.contents);
    },
    staleTime: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
    enabled: !!podcastId,
  });
};
