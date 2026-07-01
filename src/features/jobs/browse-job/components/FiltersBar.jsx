import React, { useState, useEffect } from "react";
import FilterSelect from "./FilterSelect";
import { FILTERS_CONFIG, INITIAL_FILTERS } from "@/constants/jobFilters";
import ButtonComponent from "@/components/ui/ButtonComponent";
import { ListFilter } from "lucide-react";
import {
  initialStates,
  useJobFilterationStore,
} from "../store/jobFiltersStore";

const FiltersBar = () => {
  const resetFilters = useJobFilterationStore((state) => state.resetFilters);
  const setFilter = useJobFilterationStore((state) => state.setFilter);

  const filters = useJobFilterationStore();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleChange = (key) => (e) => {
    setFilter(key, e.target.value);
  };
  const activeFiltersCount = FILTERS_CONFIG.filter(
    ({ key }) => filters[key] !== initialStates[key],
  ).length;

  const handleReset = () => resetFilters();

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const filterList = (
    <>
      {FILTERS_CONFIG.map(({ key, placeholder, options }) => (
        <FilterSelect
          key={key}
          options={options}
          placeholder={placeholder}
          value={filters[key] ?? ""}
          onChange={handleChange(key)}
        />
      ))}
      {activeFiltersCount > 0 && (
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 bg-transparent border border-gray-300 rounded-full px-3.5 py-1.5 text-[13px] text-gray-500 cursor-pointer transition-all duration-200"
        >
          <span className="bg-[#1A777E] text-white rounded-full text-[11px] font-bold px-1.75 py-0.5">
            {activeFiltersCount}
          </span>
          Clear filters
        </button>
      )}
    </>
  );

  return (
    <div className="pt-4">
      <div className="hidden md:flex flex-wrap gap-2 items-start">
        {filterList}
      </div>

      <div className="flex md:hidden items-center gap-2 mb-5">
        <button
          onClick={() => setDrawerOpen(true)}
          className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1.5 text-[13px] text-gray-600 bg-white"
        >
          <ListFilter size={14} />
          Filters
          {activeFiltersCount > 0 && (
            <span className="bg-[#1A777E] text-white rounded-full text-[11px] font-bold px-1.5 py-0.5 leading-none">
              {activeFiltersCount}
            </span>
          )}
        </button>

        {activeFiltersCount > 0 && (
          <button
            onClick={handleReset}
            className="text-[12px] text-gray-400 underline"
          >
            Clear
          </button>
        )}
      </div>

      {drawerOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30 z-40 md:hidden"
            onClick={() => setDrawerOpen(false)}
          />

          <div className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl shadow-xl p-5 md:hidden animate-slide-up">
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-gray-800 text-[15px]">
                Filters
              </span>
              <button
                onClick={() => setDrawerOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-xl leading-none"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {FILTERS_CONFIG.map(({ key, placeholder, options }) => (
                <FilterSelect
                  key={key}
                  options={options}
                  placeholder={placeholder}
                  value={filters[key] ?? ""}
                  onChange={handleChange(key)}
                  fullWidth
                />
              ))}
            </div>

            <div className="flex gap-2 mt-5">
              {activeFiltersCount > 0 && (
                <button
                  onClick={() => {
                    handleReset();
                    setDrawerOpen(false);
                  }}
                  className="flex-1 border border-gray-300 rounded-full py-2 text-[13px] text-gray-500"
                >
                  Clear all ({activeFiltersCount})
                </button>
              )}
              <ButtonComponent
                onClick={() => setDrawerOpen(false)}
                className={`flex-1 bg-cyan-900 text-white rounded-full py-2 text-[13px] font-medium`}
              >
                Apply
              </ButtonComponent>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FiltersBar;
