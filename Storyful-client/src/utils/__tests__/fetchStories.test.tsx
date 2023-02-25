import { render, screen } from "@testing-library/react";
import { describe, it, vitest } from "vitest";
import {
  fetchAllStoriesFromDatabase,
  fetchAllStoriesFromDatabaseTest,
} from "../helpers";

describe("fetchAllStoriesFromDatabaseTest", () => {
  test("Returns the expected data from the API", async () => {
    interface mockStoryInterface {
      id: number;
      title: string;
      author: string;
      genre: string;
      cover_location: string;
    }

    const story = await fetchAllStoriesFromDatabaseTest();

    expect(story[0]).toMatchObject<mockStoryInterface>({
        id: expect.any(Number),
        title: expect.any(String),
        author: expect.any(String),
        genre: expect.any(String),
        cover_location: expect.any(String),
    });
  });
});
