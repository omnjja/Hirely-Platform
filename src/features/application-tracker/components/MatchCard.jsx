import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getApplicationStats } from "../services/applicationService";

const MatchCard = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["applicationStats"],
    queryFn: getApplicationStats,
  });
  console.log(data);
  
  return (
    <div className="border-b-4 border-[#1BA2A5]">
      <p className="text-[#1BA2A5] font-bold text-sm md:mb-2">Match Success</p>
      <p className="font-bold text-xl md:text-2xl md:mb-2">Top 5% Candidate</p>
      <div className="flex items-center mb-2 gap-3 ">
        <p className="text-[#595C5E] font-normal text-sm">
          Your profile aligns with 94% of current AI Engineering roles.
        </p>
        <span className="border-4 border-[#1BA2A5] rounded-full md:w-16 w-14 md:h-12 h-12 md:p-1 flex items-center justify-center">
          94%
        </span>
      </div>
    </div>
  );
};

export default MatchCard;
