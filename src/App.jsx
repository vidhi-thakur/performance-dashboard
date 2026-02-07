import "./App.css";
import Stats from "./components/Stats";
import { generateOrders } from "./helpers/fakeDataGenerator";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaSort } from "react-icons/fa";
import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import { MdClear } from "react-icons/md";

function App() {
  const [filteredData, setFilteredData] = useState([]);
  const [orders, setOrders] = useState([]);
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    country: "",
    customerTier: "",
    status: "",
  });

  useEffect(() => {
    (() => {
      const orders = generateOrders();
      setFilteredData(orders);
      setOrders(orders);
    })();
  }, []);

  useEffect(() => {
    let data = orders;
    if (filters.country) {
      data = data.filter((d) => d.country === filters.country);
    }
    if (filters.customerTier) {
      data = data.filter((d) => d.customerTier === filters.customerTier);
    }
    if (filters.status) {
      data = data.filter((d) => d.status === filters.status);
    }
    if (filters.search) {
      data = data.filter((val) => {
        return val.customerName
          .toLowerCase()
          .includes(filters.search.toLowerCase());
      });
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFilteredData(data);
  }, [
    filters.country,
    filters.customerTier,
    filters.status,
    filters.search,
    orders,
  ]);

  const handleSearch = (e) => {
    setFilters((val) => ({ ...val, search: e.target.value }));
  };

  const handleApply = ({ country, customerTier, status }) => {
    setFilters((val) => ({ ...val, country, customerTier, status }));
    setFilterOpen(false);
  };

  const resetFilters = () => {
    setFilteredData(orders);
    setFilters((val) => ({
      ...val,
      country: "",
      customerTier: "",
      status: "",
    }));
  };

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
          <Stats
            title="Total Revenue"
            value={orders
              .reduce(
                (acc, val) =>
                  acc +
                  val.orderValue -
                  (val.discountPercent / 100) * val.orderValue,
                0
              )
              .toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
              })}
          />
          <Stats
            title="Average Order Value"
            value={(
              orders.reduce(
                (acc, val) =>
                  acc +
                  val.orderValue -
                  (val.discountPercent / 100) * val.orderValue,
                0
              ) / orders.length
            ).toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
            })}
          />
          <Stats
            title="Completed Orders"
            value={orders.filter((data) => data.status === "Completed").length}
          />
          <Stats
            title="Total Items Sold"
            value={orders.reduce((acc, val) => acc + val.itemsCount, 0)}
          />
        </section>

        <div className="mb-12">
          {/* actions */}
          <section className="flex items-center justify-between mb-(--spacing-sm) gap-2 flex-wrap">
            <div className="bg-white border p-2 border-black/25 rounded-(--spacing-sm) flex items-center gap-1 w-72">
              {/* searchbar */}
              <input
                type="text"
                className="flex-1 hover:bg-transparent focus-visible:outline-0 pl-1"
                placeholder="Search..."
                onChange={handleSearch}
              />
              <FaSearch />
            </div>
            <div className="relative flex gap-2">
              {filters.country || filters.customerTier || filters.status ? (
                <button
                  onClick={resetFilters}
                  className="bg-white border border-(--theme-color) text-(--theme-color) flex items-center gap-1"
                >
                  <MdClear />
                  Clear
                </button>
              ) : null}
              <button onClick={() => setFilterOpen((val) => !val)}>
                Filter
              </button>
              {isFilterOpen ? (
                <Filter
                  handleCancel={() => setFilterOpen(false)}
                  handleApply={handleApply}
                />
              ) : null}
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
          </section>
          <div className="text-gray-700 text-3">
            Showing {filteredData.length} results
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
