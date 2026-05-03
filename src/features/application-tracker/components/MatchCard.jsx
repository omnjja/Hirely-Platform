import React from "react";

const MatchCard = () => {
  return (
    <div className="border-b-4 border-[#1BA2A5]">
      <p className="text-[#1BA2A5] font-bold text-sm">Match Success</p>
      <p className="font-bold text-xl md:text-2xl">Top 5% Candidate</p>
      <div className="flex items-center mb-2 gap-3 ">
        <p className="text-[#595C5E] font-normal text-sm">
          Your profile aligns with 94% of current AI Engineering roles.
        </p>
        <span className="border-4 border-[#1BA2A5] rounded-full w-16 h-16 flex items-center justify-center">
          94%
        </span>
      </div>
    </div>
  );
};

export default MatchCard;
