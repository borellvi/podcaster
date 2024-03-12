import { useParams } from "react-router-dom";

export const EpisodeDetails = () => {
  const { podcastId, episodeId } = useParams();

  return (
    <div>
      {podcastId} {episodeId}
    </div>
  );
};
