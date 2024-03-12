import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetTopPodcasts } from "../../queries/useGetTopPodcasts";
import { ScreenWrapper } from "../../components/ScreenWrapper";

export const Root = () => {
  const { data, isLoading } = useGetTopPodcasts();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredData = data?.entry.filter(
    (podcast) =>
      podcast["im:name"].label
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      podcast["im:artist"].label
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <ScreenWrapper isLoading={isLoading}>
      <div className="flex items-center justify-end mb-4">
        <div className="text-white bg-blue-500 rounded-full px-3 py-1 text-xs font-bold mr-4">
          {filteredData?.length || 0}
        </div>
        <input
          type="text"
          className="p-2 border border-gray-300 rounded"
          placeholder="Filter podcasts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredData?.map((podcast, index) => (
          <Link
            to={`/podcast/${podcast.id.attributes["im:id"]}`}
            key={index}
            className="rounded-lg shadow-md p-4 flex flex-col items-center justify-center border-2 border-transparent hover:border-blue-500 hover:cursor-pointer"
          >
            <img
              className="h-32 w-32 object-cover rounded-full"
              src={podcast["im:image"][2].label}
              alt={podcast["im:name"].label}
            />
            <h4 className="mt-2 font-semibold text-lg text-center">
              {podcast["im:name"].label}
            </h4>
            <p className="text-sm text-gray-600 text-center">
              Author: {podcast["im:artist"].label}
            </p>
          </Link>
        ))}
      </div>
    </ScreenWrapper>
  );
};
