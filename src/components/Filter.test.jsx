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

  it("calls handleCancel when Cancel button is clicked", async () => {
    const user = userEvent.setup();
    const handleCancelFn = vi.fn();
    render(<Filter handleApply={vi.fn()} handleCancel={handleCancelFn} />);
    const cancelBtn = screen.getByRole("button", { name: /cancel/i });

    await user.click(cancelBtn);
    expect(handleCancelFn).toHaveBeenCalledTimes(1);
  });

  it("calls handleApply with selected options when apply button is clicked", async () => {
    const user = userEvent.setup();
    const handleApplyFn = vi.fn();
    render(<Filter handleApply={handleApplyFn} handleCancel={vi.fn()} />);

    // select country from dropdown
    const countrySelect = screen.getByLabelText("Country");
    await user.selectOptions(countrySelect, "India");

    // select customer tier from dropdown
    const customerTierSelect = screen.getByLabelText("Customer Tier");
    await user.selectOptions(customerTierSelect, "Pro");

    // select status from dropdown
    const statusSelect = screen.getByLabelText("Status");
    await user.selectOptions(statusSelect, "Pending");

    // click apply button
    const applyBtn = screen.getByRole("button", { name: /apply/i });
    await user.click(applyBtn);

    expect(handleApplyFn).toHaveBeenCalledExactlyOnceWith({
      country: "India",
      customerTier: "Pro",
      status: "Pending",
    })
  });
});
