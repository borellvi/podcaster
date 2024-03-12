import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/Root";
import { PodcastDetails } from "./routes/PodcastDetails";
import { EpisodeDetails } from "./routes/EpisodeDetails/EpisodeDetails";

import "./index.css";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "podcast/:podcastId",
    element: <PodcastDetails />,
  },
  {
    path: "podcast/:podcastId/episode/:episodeId",
    element: <EpisodeDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
