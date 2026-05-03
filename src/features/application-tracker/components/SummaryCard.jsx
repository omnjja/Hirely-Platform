import React from "react";

const SummaryCard = ({ icon, sum, description }) => {
  return (
    <div className="border-2 border-black rounded-3xl p-5">
      <div className="bg-[#789EFC33] rounded-full w-10 h-10 flex items-center justify-center">
        {icon}
      </div>
      <p className="font-bold text-xl md:text-2xl">{sum}</p>
      <p className="text-sm font-medium text-[#595C5E] ">{description}</p>
    </div>
  );
};

export default SummaryCard;
