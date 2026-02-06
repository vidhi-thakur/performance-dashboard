import React from "react";

function Stats({ title, value }) {
  return (
    <div className="min-w-30 bg-white shadow-(--shadow) rounded-(--spacing-xs) p-4 flex-1">
      <p className="text-4xl font-medium">{value}</p>
      <span className="text-sm">{title}</span>
    </div>
  );
}

export default Stats;
