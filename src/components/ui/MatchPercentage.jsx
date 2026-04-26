import React from "react";

const MatchPercentage = () => {
  return (
    <div className="sm:w-55 md:w-60 flex flex-col items-center gap-3 bg-white shadow-lg rounded-lg border p-4 sm:p-6">
      <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full p-3 bg-linear-to-r from-[#1B41AA] to-[#10B982] shrink-0">
        <div className="flex flex-col justify-center items-center w-full h-full bg-white rounded-full">
          <span className="text-[36px] sm:text-[42px] md:text-[48px] font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-[#1B41AA] to-[#10B981]">
            92%
          </span>
          <span className="text-[#595C5E] text-[10px] sm:text-[11px] md:text-[12px] uppercase font-bold">
            Match Score
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center text-center">
        <p className="text-[#2E2E2E] text-[15px] sm:text-[16px] md:text-[18px] font-bold">
          Job Title
        </p>
        <p className="text-[#595C5E] text-[12px] sm:text-[13px] md:text-[14px]">
          job details here..
        </p>
      </div>
    </div>
  );
};

export default MatchPercentage;
