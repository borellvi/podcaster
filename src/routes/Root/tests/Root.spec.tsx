import { fireEvent, render, screen } from "@testing-library/react";
import { Root } from "../Root";
import { setupServer } from "msw/node";
import { handlers } from "./Root.mockHandlers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const queryClient = new QueryClient();

describe("Root", () => {
  it("should render the podcasts", async () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Root />
        </QueryClientProvider>
      </MemoryRouter>
    );

    expect(await screen.findByText("The Joe Budden Podcast")).toBeDefined();
  });

  it("should be able to filter by podcast name", async () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Root />
        </QueryClientProvider>
      </MemoryRouter>
    );

    expect(await screen.findByText("The Joe Budden Podcast")).toBeDefined();

    const input = screen.getByPlaceholderText("Filter podcasts...");

    fireEvent.change(input, { target: { value: "Friday Night Karaoke" } });

    expect(screen.queryByText("Friday Night Karaoke")).toBeDefined();
    expect(screen.queryByText("The Joe Budden Podcast")).toBeNull();
  });
});
