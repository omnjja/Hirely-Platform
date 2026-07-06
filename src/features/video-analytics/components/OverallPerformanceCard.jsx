import React from "react";

const OverallPerformanceCard = ({ data }) => {
  const { conclusion, overall_performance } = data;

  return (
    <div className=" flex flex-col gap-3 justify-center items-center p-4 border-2 border-l-[#1FA4A7] border-t-0 rounded-2xl">
      <p className="text-base text-[#454652]">Overall Performance</p>
      <div className="flex items-center justify-center flex-col border-4 border-[#1FA4A7] w-32 h-32 rounded-full">
        <span className="text-4xl font-bold text-[#0576D6]">
          {Math.floor(overall_performance)}
        </span>
        <p className="text-sm font-medium text-[#454652]">out of 100</p>
      </div>
      <p className="text-center text-sm text-[#454652]">{conclusion}</p>
    </div>
  );
};

export default OverallPerformanceCard;
