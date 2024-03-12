import { useParams } from "react-router-dom";

export const PodcastDetails = () => {
  const { podcastId } = useParams();

  return <div>Podcast ID: {podcastId}</div>;
};
