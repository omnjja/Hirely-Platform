import React, { useState } from "react";
import FilterSelect from "./FilterSelect";
import { FILTERS_CONFIG, INITIAL_FILTERS } from "@/constants/jobFilters";

const FiltersBar = () => {
  const [filters, setFilters] = useState(INITIAL_FILTERS);

  const handleChange = (key) => (e) => {
    setFilters((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const activeCount = Object.values(filters).filter(Boolean).length;

  const handleReset = () => setFilters(INITIAL_FILTERS);

  return (
    <div className="py-4">
      <div className="flex flex-wrap gap-2 items-start"
      >
        {FILTERS_CONFIG.map(({ key, placeholder, options }) => (
          <FilterSelect
            key={key}
            options={options}
            placeholder={placeholder}
            value={filters[key]}
            onChange={handleChange(key)}
            resultsCount={3}
          />
        ))}

        {activeCount > 0 && (
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 bg-transparent border border-gray-300 rounded-full px-3.5 py-1.5 text-[13px] text-gray-500 cursor-pointer transition-all duration-200"
          >
            <span className="bg-[#1A777E] text-white rounded-full text-[11px] font-bold px-1.75 py-0.5">
              {activeCount}
            </span>
            Clear filters
          </button>
        )}
      </div>
      {/* 
      <pre
        style={{
          marginTop: 24,
          background: "#F3F4F6",
          borderRadius: 12,
          padding: 16,
          fontSize: 12,
          color: "#374151",
          overflowX: "auto",
        }}
      >
        {JSON.stringify(filters, null, 2)}
      </pre> */}
    </div>
  );
};

export default FiltersBar;
