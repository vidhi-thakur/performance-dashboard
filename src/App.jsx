import "./App.css";
import Stats from "./components/Stats";
import { generateOrders } from "./helpers/fakeDataGenerator";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useMemo, useState } from "react";
import Filter from "./components/Filter";
import Table from "./components/Table";
import { MdClear } from "react-icons/md";

function App() {
  const orders = useMemo(() => generateOrders(), []);
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    country: "",
    customerTier: "",
    status: "",
  });

  const handleSearch = (e) => {
    setFilters((val) => ({ ...val, search: e.target.value }));
  };

  const handleApply = ({ country, customerTier, status }) => {
    setFilters((val) => ({ ...val, country, customerTier, status }));
    setFilterOpen(false);
  };

  const resetFilters = () => {
    setFilters((val) => ({
      ...val,
      country: "",
      customerTier: "",
      status: "",
    }));
  };

  const filteredData = useMemo(() => {
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
    return data;
  }, [
    filters.country,
    filters.customerTier,
    filters.status,
    filters.search,
    orders,
  ]);

  const summary = useMemo(() => {
    return {
      revenue: filteredData
        .reduce(
          (acc, val) =>
            acc + val.orderValue - (val.discountPercent / 100) * val.orderValue,
          0
        )
        .toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
        }),
      avgValue: (
        filteredData.reduce(
          (acc, val) =>
            acc + val.orderValue - (val.discountPercent / 100) * val.orderValue,
          0
        ) / filteredData.length
      ).toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
      }),
      completed: filteredData.filter((data) => data.status === "Completed").length,
      totalSold: filteredData.reduce((acc, val) => acc + val.itemsCount, 0),
    };
  }, [filteredData]);

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
          <Stats title="Total Revenue" value={summary.revenue} />
          <Stats title="Average Order Value" value={summary.avgValue} />
          <Stats title="Completed Orders" value={summary.completed} />
          <Stats title="Total Items Sold" value={summary.totalSold} />
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
          <Table filteredData={filteredData} />
        </div>
      </div>
    </div>
  );
}

export default App;
