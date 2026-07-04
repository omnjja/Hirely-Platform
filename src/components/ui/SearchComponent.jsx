import React from "react";
import { Search } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const SearchComponent = ({
  placeholder = "Search...",
  className = "",
  search,
  handleChange,
}) => {
  const isMobile = useIsMobile();

  return (
    <div className={`relative ${className}`}>
      <div className="rounded-[10px] p-[1.2px] bg-gray-300 focus-within:bg-linear-to-r focus-within:from-[#2C57B1] focus-within:to-[#10B982] transition-all duration-300">
        <div className="relative overflow-hidden rounded-[10px] bg-white">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={isMobile ? 12 : 18}
          />

          <input
            type="text"
            placeholder={placeholder}
            value={search ?? ""}
            onChange={(e) => handleChange(e)}
            className="w-full py-0.5 sm:py-2 pr-1 sm:pr-4 pl-10 text-xs sm:text-base bg-transparent focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
