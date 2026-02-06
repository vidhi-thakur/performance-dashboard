import React from "react";

function Filter({ handleCancel, handleApply }) {
  return (
    <div className="absolute top-10 right-0 z-10 bg-white shadow-(--shadow) w-72 p-4 rounded-(--spacing-sm) flex flex-col gap-4">
      <header className="font-semibold">Filter</header>
      <div className="flex flex-col gap-2">
        <DropdownInput
          label="Country"
          options={[
            "India",
            "USA",
            "Germany",
            "UK",
            "Canada",
            "France",
            "Australia",
            "Japan",
          ]}
          id="country"
        />
        <DropdownInput
          label="Customer Tier"
          options={["Enterprise", "Free", "Pro"]}
          id="customer-tier"
        />
        <DropdownInput
          label="Status"
          options={["Cancelled", "Completed", "Pending"]}
          id="status"
        />
      </div>
      <div className="mt-2 flex items-center justify-between">
        <button
          onClick={handleCancel}
          className="bg-white border border-(--theme-color) text-(--theme-color)"
        >
          Cancel
        </button>
        <button onClick={handleApply}>Apply</button>
      </div>
    </div>
  );
}

const DropdownInput = ({ label, options, id }) => {
  return (
    <div className="flex flex-col gap-1">
      <label for={id}>{label}</label>
      <div className="border border-black/25 px-1 py-2 rounded-(--spacing-sm)">
        <select id={id} name={id} className="focus-visible:outline-0 w-full">
          <option value="">Select a {label}</option>

          {options.map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
