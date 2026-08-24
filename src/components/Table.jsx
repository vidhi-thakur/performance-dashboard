import React, { useState } from "react";
import { getScrollbarSize, List } from "react-window";

function Table({ filteredData }) {
  const [size] = useState(getScrollbarSize);
  return (
    <>
      <div className="h-100 flex flex-col bg-white rounded-(--spacing-xs) custom-table">
        <div className="flex flex-row bg-white border-b border-black/10 rounded-t-(--spacing-default)">
          <div className="grow flex flex-row items-center gap-2 font-bold" data-testid="table-header">
            <div className="flex-1 font-bold p-4" data-testid="table-header-cell">Customer Name</div>
            <div className="flex-1 font-bold p-4" data-testid="table-header-cell">Customer Tier</div>
            <div className="flex-1 font-bold p-4" data-testid="table-header-cell">Country</div>
            <div className="flex-1 font-bold p-4" data-testid="table-header-cell">Order Value</div>
            <div className="flex-1 font-bold p-4" data-testid="table-header-cell">Items Count</div>
            <div className="flex-1 font-bold p-4" data-testid="table-header-cell">Discount %</div>
            <div className="flex-1 font-bold p-4" data-testid="table-header-cell">Status</div>
          </div>
          <div className="shrink" style={{ width: size }} />
        </div>
        <div className="overflow-hidden">
          <List
            rowComponent={RowComponent}
            rowCount={filteredData.length}
            rowHeight={42}
            rowProps={{ filteredData }}
          />
        </div>
      </div>

      <div data-testid="table-rowCount" className="text-gray-700 text-3 mt-(--spacing-xs)">
        Showing {filteredData.length} results
      </div>
    </>
  );
}

function RowComponent({ index, filteredData, style }) {
  const user = filteredData[index];

  return (
    <div className="flex flex-row items-center gap-2 custom-tr" style={style}>
      <div className="flex-1 p-4">{user.customerName}</div>
      <div className="flex-1 p-4">{user.customerTier}</div>
      <div className="flex-1 p-4">{user.country}</div>
      <div className="flex-1 p-4" data-testid="table-orderValue">
        {user.orderValue.toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
        })}
      </div>
      <div className="flex-1 p-4">{user.itemsCount}</div>
      <div className="flex-1 p-4">{user.discountPercent}</div>
      <div className="flex-1 p-4">{user.status}</div>
    </div>
  );
}

export default React.memo(Table);
