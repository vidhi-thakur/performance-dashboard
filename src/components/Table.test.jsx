import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Table from "./Table";

describe("Table", () => {
  it("has 9 columns", () => {
    render(<Table filteredData={[]} />);

    const tableHeaderSection = screen.getAllByTestId("table-header-cell");

    expect(tableHeaderSection).toHaveLength(7);
  });
});
