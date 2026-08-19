import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Filter from "./Filter";

describe("Filter", () => {
  it("renders filter header correctly", () => {
    render(<Filter handleApply={vi.fn()} handleCancel={vi.fn()} />);
    expect(screen.getByTestId("filter-header")).toHaveTextContent("Filter");
  });

  it("renders all the dropdown fields with labels", () => {
    render(<Filter handleApply={vi.fn()} handleCancel={vi.fn()} />);
    expect(screen.getByLabelText("Country")).toBeInTheDocument();
    expect(screen.getByLabelText("Customer Tier")).toBeInTheDocument();
    expect(screen.getByLabelText("Status")).toBeInTheDocument();
  });

  it("renders cancel and apply buttons", () => {
    render(<Filter handleApply={vi.fn()} handleCancel={vi.fn()} />);
    expect(screen.getByRole("button", { name: /cancel/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /apply/i })).toBeInTheDocument();
  });
});
