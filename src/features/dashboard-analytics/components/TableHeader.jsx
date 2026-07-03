import React from "react";

const TableHeader = () => {
  return (
    <div className="grid grid-cols-[2.2fr_1fr_1.6fr_1fr_0.7fr] items-center bg-[#E8EFF3] px-5 py-3.5 border-b border-[#0A0A0A]">
      <span className="text-base font-bold text-[#62748e]">
        CANDIDATE / ROLE
      </span>
      <span className="text-center text-base font-bold text-[#62748e]">
        MATCH SCORE
      </span>
      <span className="text-center text-base font-bold text-[#62748e]">
        VISUAL INDICATORS
      </span>
      <span className="text-center text-base font-bold text-[#62748e]">
        STATUS
      </span>
      <span className="text-right text-base font-bold text-[#62748e]">
        ACTIONS
      </span>
    </div>
  );
};

export default TableHeader;
