import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { fetchAllStoriesFromDatabase } from "../../utils/helpers";
import Home from "../Home/Home";

describe("Home", () => {
  it("Renders stories fetched from database", () => {
    /// ARRANGE
    render(<Home />);
    /// ACT
    /// EXPECT
    expect(
      screen.getByRole("heading", {
        level: 2,
      })
    ).toHaveTextContent("Categories");
  });
});
