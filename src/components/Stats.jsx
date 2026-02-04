import React from "react";

function Stats({ title, value }) {
  return (
    <div
      className="min-w-30 bg-white shadow-(--shadow) rounded-(--spacing-xs) p-4 
                flex-[0_0_100%]
                sm:flex-[0_0_calc(50%-0.5rem)] 
                md:flex-[0_0_calc(33.333%-1rem)]
                lg:flex-[0_0_calc(20%-0.85rem)]"
    >
      <p className="text-4xl font-medium">{value}</p>
      <span className="text-sm">{title}</span>
    </div>
  );
}

export default Stats;
