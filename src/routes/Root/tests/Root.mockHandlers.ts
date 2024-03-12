import { rest } from "msw";
import { topPodcastsMock } from "./Root.mocks";

export const handlers = [
  rest.get(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(topPodcastsMock));
    }
  ),
];
