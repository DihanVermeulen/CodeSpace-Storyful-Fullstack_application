import { render, screen } from "@testing-library/react";
import { describe, it, vitest } from "vitest";
import { fetchAllStoriesFromDatabase } from "../helpers";

describe("fetchAllStoriesFromDatabaseTest", () => {
  test("Returns the expected data from the API", async () => {
    const mockResponse: any = [
      {
        id: 0,
        title: "Test title",
        author: "Test author",
        genre: "Test genre",
        cover_location:
          "https://example.com/example.jpg",
      },
    ];
    const mockJsonPromise = Promise.resolve(mockResponse);
    const mockFetchPromise: any = Promise.resolve({
      json: () => mockJsonPromise,
    });
    vitest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

    const data = await fetchAllStoriesFromDatabase();

    expect(data).toEqual(mockResponse);
  });
});
