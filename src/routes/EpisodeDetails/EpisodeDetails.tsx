import { useParams } from "react-router-dom";
import { useGetTopPodcasts } from "../../queries/useGetTopPodcasts";
import { useGetPodcastDetails } from "../../queries/useGetPodcastDetails";
import { PodcastSummary } from "../../components/PodcastSummary";

export const EpisodeDetails = () => {
  const { podcastId, episodeId } = useParams();

  const { data: topPodcasts } = useGetTopPodcasts();
  const { data: podcastDetails } = useGetPodcastDetails({ podcastId });

  const podcast = topPodcasts?.entry?.find(
    (podcast) => podcast.id.attributes["im:id"] === podcastId
  );

  const episode = podcastDetails?.results.find(
    (episode) => episode.trackId === Number(episodeId)
  );

  return (
    <div className="lg:flex lg:items-start lg:space-x-6">
      <div className="lg:w-1/4">
        <PodcastSummary
          title={podcast?.["im:name"].label || ""}
          author={podcast?.["im:artist"].label || ""}
          imageUrl={podcast?.["im:image"][2].label || ""}
          summary={podcast?.summary.label || ""}
        />
      </div>
      <div className="lg:w-3/4">
        <div className="rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold">{episode?.trackName}</h2>
          <p
            className="mt-4 text-sm text-gray-600"
            dangerouslySetInnerHTML={{ __html: episode?.description || "" }}
          />
          <audio className="mt-4" controls src={episode?.episodeUrl} />
        </div>
      </div>
    </div>
  );
};
