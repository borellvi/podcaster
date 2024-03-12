interface PodcastSummaryProps {
  title: string;
  author: string;
  imageUrl: string;
  summary: string;
}

export const PodcastSummary = ({
  title,
  author,
  imageUrl,
  summary,
}: PodcastSummaryProps) => {
  return (
    <div className="rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
      <img
        className="h-32 w-32 object-cover rounded-lg"
        src={imageUrl}
        alt={title}
      />
      <h4 className="mt-2 font-semibold text-lg">{title}</h4>
      <p className="text-sm text-gray-600">by {author}</p>
      <p className="mt-4 text-sm text-gray-600">{summary}</p>
    </div>
  );
};
