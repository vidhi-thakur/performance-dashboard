import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Filter from "./Filter";
import userEvent from "@testing-library/user-event";

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

  it("renders correct number of options in each dropdown", () => {
    render(<Filter handleApply={vi.fn()} handleCancel={vi.fn()} />);

    const countrySelect = screen.getByLabelText("Country");
    const customerTierSelect = screen.getByLabelText("Customer Tier");
    const statusSelect = screen.getByLabelText("Status");

    expect(within(countrySelect).getAllByRole("option")).toHaveLength(9);
    expect(within(customerTierSelect).getAllByRole("option")).toHaveLength(4);
    expect(within(statusSelect).getAllByRole("option")).toHaveLength(4);
  });

  it("renders default placeholder option as selected initially", () => {
    render(<Filter handleApply={vi.fn()} handleCancel={vi.fn()} />);

    const countrySelect = screen.getByLabelText("Country");
    const customerTierSelect = screen.getByLabelText("Customer Tier");
    const statusSelect = screen.getByLabelText("Status");

    expect(countrySelect).toHaveValue("");
    expect(customerTierSelect).toHaveValue("");
    expect(statusSelect).toHaveValue("");
  });

  it("updates the country display value upon selecting a country option", async () => {
    const user = userEvent.setup();
    render(<Filter handleApply={vi.fn()} handleCancel={vi.fn()} />);

    const countrySelect = screen.getByLabelText("Country");

    await user.selectOptions(countrySelect, "India");
    expect(countrySelect).toHaveValue("India");
  });

  it("updates the customer tier display value upon selecting a customer tier", async () => {
    const user = userEvent.setup();
    render(<Filter handleApply={vi.fn()} handleCancel={vi.fn()} />);

    const customerTierSelect = screen.getByLabelText("Customer Tier");

    await user.selectOptions(customerTierSelect, "Free");
    expect(customerTierSelect).toHaveValue("Free");
  });

  it("updates the status display value upon selecting a status option", async () => {
    const user = userEvent.setup();
    render(<Filter handleApply={vi.fn()} handleCancel={vi.fn()} />);
    const statusSelect = screen.getByLabelText("Status");

    await user.selectOptions(statusSelect, "Completed");
    expect(statusSelect).toHaveValue("Completed");
  });

  it("calls handleCancel when Cancel button is clicked", () => {

  })
});
