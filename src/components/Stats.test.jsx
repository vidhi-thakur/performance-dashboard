import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Stats from "./Stats";

describe("Stats", () => {
  it("renders the value and title correctly", () => {
    render(<Stats value={100} title="Avg. value" />);
    expect(screen.getByTestId("stats-value")).toHaveTextContent("100");
    expect(screen.getByTestId("stats-title")).toHaveTextContent("Avg. value");
  });
});
