import React from "react";

const HeaderCard = () => {
  return (
    <div className="flex items-end justify-between">
      <div className="flex flex-col gap-1">
        <p className="text-xs md:text-sm font-medium text-[#454652] uppercase">
          Video Interview Analysis
        </p>
        <p className="text-lg md:text-2xl font-bold text-black ">
          Senior Product Designer at Meta
        </p>
        <p className="text-xs md:text-sm text-[#454652]">
          Interviewed on October 24, 2023 • 24m 12s duration
        </p>
      </div>
    </div>
  );
};

export default HeaderCard;
