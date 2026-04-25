import React from "react";
import { Search } from "lucide-react";

const SearchComponent = ({ placeholder = "Search...", className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="rounded-[10px] p-[1.2px] bg-gray-300 focus-within:bg-linear-to-r focus-within:from-[#2C57B1] focus-within:to-[#10B982] transition-all duration-300">
        <div className="relative bg-white rounded-[10px] overflow-hidden">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder={placeholder}
            className="w-full py-2 pr-4 pl-10 bg-transparent focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
