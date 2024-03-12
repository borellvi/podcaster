import { useGetTopPodcasts } from "./Root.queries";

export const Root = () => {
  const { data, isLoading } = useGetTopPodcasts();

  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
          {data?.entry.map((podcast, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center"
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
            </div>
          ))}
        </div>
      )}
    </>
  );
};
