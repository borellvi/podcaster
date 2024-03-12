import { useParams, Link } from "react-router-dom";
import { useGetPodcastDetails } from "../../queries/useGetPodcastDetails";
import { useGetTopPodcasts } from "../../queries/useGetTopPodcasts";
import { PodcastSummary } from "../../components/PodcastSummary";

export const PodcastDetails = () => {
  const { podcastId } = useParams();

  const { data: topPodcasts } = useGetTopPodcasts();
  const { data: podcastDetails } = useGetPodcastDetails({ podcastId });

  const podcast = topPodcasts?.entry?.find(
    (podcast) => podcast.id.attributes["im:id"] === podcastId
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
          <h2 className="text-xl font-bold">
            Episodes: {podcastDetails?.resultCount}
          </h2>
        </div>
        <div className="rounded-lg shadow-md p-4 mt-4">
          <table className="table-auto w-full text-left divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 w-3/5 text-gray-500 text-sm font-medium">
                  Title
                </th>
                <th className="px-4 py-2 w-1/5 text-gray-500 text-sm font-medium">
                  Date
                </th>
                <th className="px-4 py-2 w-1/5 text-gray-500 text-sm font-medium">
                  Duration
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {podcastDetails?.results.map((episode, index) => {
                const date = new Date(episode.releaseDate);
                const formattedDate = `${date.getDate()}/${
                  date.getMonth() + 1
                }/${date.getFullYear()}`;

                return (
                  <tr key={index}>
                    <Link
                      to={`/podcast/${podcastId}/episode/${episode.trackId}`}
                      className="text-blue-500 hover:text-blue-800 visited:text-purple-600"
                    >
                      <td className="px-4 py-2">{episode.trackName}</td>
                    </Link>
                    <td className="px-4 py-2">{formattedDate}</td>
                    <td className="px-4 py-2">
                      {new Date(episode.trackTimeMillis)
                        .toISOString()
                        .slice(11, 19)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
