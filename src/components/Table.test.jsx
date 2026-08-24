import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Table from "./Table";
import { generateOrders } from "../helpers/fakeDataGenerator";

describe("Table", () => {
  it("has 9 columns", () => {
    render(<Table filteredData={[]} />);

    const tableHeaderSection = screen.getAllByTestId("table-header-cell");

    expect(tableHeaderSection).toHaveLength(7);
  });

  it("renders correct row count", () => {
    const filteredData = generateOrders(7);
    render(<Table filteredData={filteredData} />);

    expect(screen.getByTestId("table-rowCount")).toHaveTextContent(
      "Showing 7 results"
    );
  });

  it("renders formatted order value", () => {
    const baseOrder = {
      customerName: "Test Customer",
      customerTier: "Gold",
      country: "India",
      itemsCount: 1,
      discountPercent: 10,
      status: "Active",
      orderValue: 1000,
    };
    render(<Table filteredData={[baseOrder]} />);
    expect(screen.getByTestId("table-orderValue")).toHaveTextContent(
      "₹1,000.00"
    );
  });
});
