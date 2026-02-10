import React from "react";
import { FaSort } from "react-icons/fa";

function Table({ filteredData }) {
  console.log("Row render")
  return (
    <table border="1" cellPadding="8" width={"100%"}>
      <thead className="bg-white sticky top-0 border-bottom">
        <tr>
          <th>
            <div className="flex items-center justify-between">
              <span>Customer Name</span>
              <FaSort className="cursor-pointer" />
            </div>
          </th>
          <th>Customer Tier</th>
          <th>Country</th>
          <th>Order Value</th>
          <th>Items Count</th>
          <th>Discount %</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {filteredData.map((user) => (
          <tr key={user.id}>
            <td>{user.customerName}</td>
            <td>{user.customerTier}</td>
            <td>{user.country}</td>
            <td>
              {user.orderValue.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
              })}
            </td>
            <td>{user.itemsCount}</td>
            <td>{user.discountPercent}</td>
            <td>{user.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default React.memo(Table);
