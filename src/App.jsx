import "./App.css";
import Stats from "./components/Stats";
import { generateOrders } from "./helpers/fakeDataGenerator";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaSort } from "react-icons/fa";
import { useEffect, useState } from "react";
import Filter from "./components/Filter";

function App() {
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    (() => {
      const orders = generateOrders();
      setFilteredData(orders);
    })();
  }, []);

  return (
    <div className="min-h-full">
      <header className="bg-white text-black py-4 shadow-(--shadow) px-6 max-w-7xl mx-auto">
        <h2>Transaction Analytics Dashboard</h2>
      </header>

      <div className="p-6 max-w-7xl mx-auto">
        {/* page heading */}
        <div className="mb-(--spacing-sm) flex justify-between items-center">
          <span className="font-semibold">Insights</span>
          <button className="px-1 py-1.5 bg-transparent text-black flex items-center gap-0.5">
            Export <MdOutlineFileDownload />
          </button>
        </div>
        {/* summary stats */}
        <section className="flex gap-4 mb-(--spacing-lg) flex-wrap">
          <Stats title="Total Orders" value={100} />
          <Stats title="Total Revenue" value={100} />
          <Stats title="Average Order Value" value={100} />
          <Stats title="Completed Orders" value={100} />
          <Stats title="Revenue by Tier" value={100} />
        </section>

        <div>
          {/* actions */}
          <section className="flex items-center justify-between mb-(--spacing-sm) gap-2 flex-wrap">
            <div className="bg-white border p-2 border-black/25 rounded-(--spacing-sm) flex items-center gap-1 w-72">
              {/* searchbar */}
              <input
                type="text"
                className="flex-1 hover:bg-transparent focus-visible:outline-0 pl-1"
                placeholder="Search..."
              />
              <FaSearch />
            </div>
            <div className="relative">
              <button>Filter</button>
              <Filter />
            </div>
          </section>

          {/* data table */}

          <section className="bg-white rounded-(--spacing-sm) h-112 overflow-auto mb-4">
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
                    <td>{user.orderValue}</td>
                    <td>{user.itemsCount}</td>
                    <td>{user.discountPercent}</td>
                    <td>{user.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
